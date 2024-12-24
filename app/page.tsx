"use client";

import { useFormStore } from "@/lib/store";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalInfo from "@/components/steps/personal-info";
import AddressDetails from "@/components/steps/address-details";
import Preferences from "@/components/steps/preferences";
import Review from "@/components/steps/review";

export default function Home() {
  const { formData, setFormData } = useFormStore();

  const handleTabChange = (value: string) => {
    setFormData({ currentStep: parseInt(value) });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-3xl mx-auto">
        <Tabs
          value={formData.currentStep.toString()}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="1">Personal</TabsTrigger>
            <TabsTrigger value="2">Address</TabsTrigger>
            <TabsTrigger value="3">Preferences</TabsTrigger>
            <TabsTrigger value="4">Review</TabsTrigger>
          </TabsList>
          <TabsContent value="1">
            <PersonalInfo />
          </TabsContent>
          <TabsContent value="2">
            <AddressDetails />
          </TabsContent>
          <TabsContent value="3">
            <Preferences />
          </TabsContent>
          <TabsContent value="4">
            <Review />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}