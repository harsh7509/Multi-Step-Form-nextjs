"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { useFormStore } from "@/lib/store";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  notifications: z.boolean(),
  newsletter: z.boolean(),
  updates: z.boolean(),
});

export default function Preferences() {
  const { formData, setFormData } = useFormStore();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      notifications: formData.notifications,
      newsletter: formData.newsletter,
      updates: formData.updates,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData({ ...values, currentStep: 4 });
    toast({
      title: "Progress saved",
      description: "Your preferences have been updated.",
    });
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Preferences</h2>
        <p className="text-muted-foreground">
          Customize your communication preferences.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="notifications"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">
                    Push Notifications
                  </FormLabel>
                  <FormDescription>
                    Receive notifications about important updates.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newsletter"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Newsletter</FormLabel>
                  <FormDescription>
                    Subscribe to our monthly newsletter.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="updates"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Product Updates</FormLabel>
                  <FormDescription>
                    Get notified about new features and improvements.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => setFormData({ currentStep: 2 })}
            >
              Previous
            </Button>
            <Button type="submit">Review</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}