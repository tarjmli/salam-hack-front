import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import ProfileSettings from "@/components/dashboard/settings/ProfileSettings";
import IntegrationSettings from "@/components/dashboard/settings/IntegrationSettings";
import NotificationSettings from "@/components/dashboard/settings/NotificationSettings";
import ApiSettings from "@/components/dashboard/settings/ApiSettings";
import InternationalizationSettings from "@/components/dashboard/settings/InternationalizationSettings";
import AppearanceSettings from "@/components/dashboard/settings/AppearanceSettings";

export const metadata: Metadata = {
  title: "Settings - IntlHub",
  description: "Manage your internationalization settings and preferences",
};

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and internationalization preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="i18n">Internationalization</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <ProfileSettings />
          </Card>
        </TabsContent>

        <TabsContent value="integrations">
          <Card>
            <IntegrationSettings />
          </Card>
        </TabsContent>

        <TabsContent value="i18n">
          <Card>
            <InternationalizationSettings />
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <NotificationSettings />
          </Card>
        </TabsContent>

        <TabsContent value="api">
          <Card>
            <ApiSettings />
          </Card>
        </TabsContent>

        <TabsContent value="appearance">
          <Card>
            <AppearanceSettings />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
