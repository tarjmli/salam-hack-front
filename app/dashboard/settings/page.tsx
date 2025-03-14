import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import ProfileSettings from "@/components/dashboard/settings/ProfileSettings";
import ApiSettings from "@/components/dashboard/settings/ApiSettings";
import InternationalizationSettings from "@/components/dashboard/settings/InternationalizationSettings";
import AppearanceSettings from "@/components/dashboard/settings/AppearanceSettings";

export const metadata: Metadata = {
  title: "Settings - Tarjemli",
  description: "Manage your internationalization settings and preferences",
};

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">الإعدادات</h1>
        <p className="text-muted-foreground">
          قم بإدارة إعدادات حسابك وتفضيلات التدويل
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4" dir="rtl">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
          <TabsTrigger value="profile">الملف الشخصي</TabsTrigger>
          <TabsTrigger value="i18n">التدويل</TabsTrigger>
          <TabsTrigger value="api">واجهة البرمجة (API)</TabsTrigger>
          <TabsTrigger value="appearance">المظهر</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <ProfileSettings />
          </Card>
        </TabsContent>

        <TabsContent value="i18n">
          <Card>
            <InternationalizationSettings />
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
