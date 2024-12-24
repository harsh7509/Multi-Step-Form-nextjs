"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFormStore } from "@/lib/store";
import { useToast } from "@/hooks/use-toast";

export default function Review() {
  const { formData, setFormData, resetForm } = useFormStore();
  const { toast } = useToast();

  const handleSubmit = async () => {
    setFormData({ isSubmitting: true });
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast({
      title: "Form submitted successfully!",
      description: "Thank you for completing the form.",
    });
    
    resetForm();
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Review Your Information</h2>
        <p className="text-muted-foreground">
          Please review your information before submitting.
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Your contact details</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">
                  Full Name
                </dt>
                <dd>
                  {formData.firstName} {formData.lastName}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">
                  Email
                </dt>
                <dd>{formData.email}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">
                  Phone
                </dt>
                <dd>{formData.phone}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Address</CardTitle>
            <CardDescription>Your current address</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <dt className="text-sm font-medium text-muted-foreground">
                  Street Address
                </dt>
                <dd>{formData.street}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">
                  City
                </dt>
                <dd>{formData.city}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">
                  State
                </dt>
                <dd>{formData.state}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">
                  ZIP Code
                </dt>
                <dd>{formData.zipCode}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>Your communication preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">
                  Push Notifications
                </dt>
                <dd>{formData.notifications ? "Enabled" : "Disabled"}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">
                  Newsletter
                </dt>
                <dd>{formData.newsletter ? "Subscribed" : "Not subscribed"}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">
                  Product Updates
                </dt>
                <dd>{formData.updates ? "Enabled" : "Disabled"}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={() => setFormData({ currentStep: 3 })}
          >
            Previous
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={formData.isSubmitting}
          >
            {formData.isSubmitting ? "Submitting..." : "Submit Form"}
          </Button>
        </div>
      </div>
    </div>
  );
}