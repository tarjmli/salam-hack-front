import { Metadata } from "next";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import ProfileSettings from "@/components/dashboard/settings/ProfileSettings";

export const metadata: Metadata = {
  title: "Settings - Tarjemli",
  description: "Manage your internationalization settings and preferences",
};

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-10 px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">الإعدادات</h1>
        <p className="text-muted-foreground">
          قم بإدارة إعدادات حسابك وتفضيلات التدويل
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4" dir="rtl">
        <TabsContent value="profile">
          <Card>
            <ProfileSettings />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
