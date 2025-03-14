"use client";

import { useState } from "react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, Plus, Check, Globe, FileText, Code } from "lucide-react";
import { toast } from "sonner";

export default function InternationalizationSettings() {
  const [defaultLocale, setDefaultLocale] = useState("en");
  const [supportedLocales, setSupportedLocales] = useState([
    { code: "en", name: "English", default: true },
    { code: "fr", name: "French", default: false },
    { code: "es", name: "Spanish", default: false },
    { code: "de", name: "German", default: false },
    { code: "ja", name: "Japanese", default: false },
  ]);
  const [newLocale, setNewLocale] = useState("");
  const [newLocaleName, setNewLocaleName] = useState("");
  const [extractMessages, setExtractMessages] = useState(true);
  const [autoTranslate, setAutoTranslate] = useState(false);
  const [formatDetection, setFormatDetection] = useState(true);
  const [pseudoLocalization, setPseudoLocalization] = useState(false);
  const [libraryType, setLibraryType] = useState("react-intl");
  const [fileFormat, setFileFormat] = useState("json");

  const handleAddLocale = () => {
    if (!newLocale || !newLocaleName) return;

    if (supportedLocales.some((locale) => locale.code === newLocale)) {
      toast(
        `The locale code "${newLocale}" is already in your supported locales.`
      );
      return;
    }

    setSupportedLocales([
      ...supportedLocales,
      { code: newLocale, name: newLocaleName, default: false },
    ]);

    setNewLocale("");
    setNewLocaleName("");

    toast(
      `${newLocaleName} (${newLocale}) has been added to your supported locales.`
    );
  };

  const handleRemoveLocale = (code: string) => {
    if (code === defaultLocale) {
      toast(
        "You cannot remove the default locale. Please set another locale as default first."
      );
      return;
    }

    setSupportedLocales(
      supportedLocales.filter((locale) => locale.code !== code)
    );

    toast("The locale has been removed from your supported locales.");
  };

  const handleSetDefaultLocale = (code: string) => {
    setDefaultLocale(code);
    setSupportedLocales(
      supportedLocales.map((locale) => ({
        ...locale,
        default: locale.code === code,
      }))
    );

    toast(`The default locale has been set to ${code}.`);
  };

  return (
    <>
      <CardHeader>
        <CardTitle>إعدادات التدويل</CardTitle>
        <CardDescription>
          قم بتكوين كيفية تطبيق التدويل على مشاريعك.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="locales" className="space-y-4">
          <TabsList>
            <TabsTrigger value="locales" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>اللغات المحلية</span>
            </TabsTrigger>
            <TabsTrigger value="formats" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>التنسيقات</span>
            </TabsTrigger>
            <TabsTrigger value="extraction" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span>الاستخراج</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="locales" className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">اللغات المعتمدة</h3>
              <p className="text-sm text-muted-foreground">
                إدارة اللغات التي سيدعمها التطبيق الخاص بك.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {supportedLocales.map((locale) => (
                  <div
                    key={locale.code}
                    className="flex items-center gap-2 rounded-md border px-3 py-2"
                  >
                    <span>{locale.name}</span>
                    <Badge variant="outline">{locale.code}</Badge>
                    {locale.default && (
                      <Badge className="ml-1">القيمة الافتراضية</Badge>
                    )}
                    {!locale.default && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-5 w-5 rounded-full"
                        onClick={() => handleSetDefaultLocale(locale.code)}
                      >
                        <Check className="h-3 w-3" />
                        <span className="sr-only">تعيين كإعداد افتراضي</span>
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-5 w-5 rounded-full"
                      onClick={() => handleRemoveLocale(locale.code)}
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">يزيل</span>
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-end gap-2">
                <div className="space-y-2">
                  <Label htmlFor="locale-code">رمز الموقع</Label>
                  <Input
                    id="locale-code"
                    placeholder="e.g., zh-CN"
                    value={newLocale}
                    onChange={(e) => setNewLocale(e.target.value)}
                    className="w-24"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="locale-name">اسم الموقع</Label>
                  <Input
                    id="locale-name"
                    placeholder="e.g., Chinese (Simplified)"
                    value={newLocaleName}
                    onChange={(e) => setNewLocaleName(e.target.value)}
                    className="w-48"
                  />
                </div>
                <Button
                  onClick={handleAddLocale}
                  disabled={!newLocale || !newLocaleName}
                  className="mb-0.5"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Locale
                </Button>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">اكتشاف الموقع</h3>
                <p className="text-sm text-muted-foreground">
                  قم بتكوين كيفية اكتشاف الإعدادات المحلية في تطبيقك.{" "}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="browser-detection">
                      اكتشاف لغة المتصفح{" "}
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      الكشف عن لغة متصفح المستخدم واستخدامها تلقائيًا{" "}
                    </p>
                  </div>
                  <Switch
                    id="browser-detection"
                    checked={true}
                    onCheckedChange={() => {}}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="url-detection">اكتشاف مسار عنوان URL</Label>
                    <p className="text-xs text-muted-foreground">
                      استخدم مسارات URL لتحديد الموقع المحلي الحالي (على سبيل
                      المثال، /fr/about){" "}
                    </p>
                  </div>
                  <Switch
                    id="url-detection"
                    checked={true}
                    onCheckedChange={() => {}}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="cookie-detection">
                      الكشف القائم على ملفات تعريف الارتباط{" "}
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      تخزين واسترجاع الإعدادات المحلية المفضلة للمستخدم من ملفات
                      تعريف الارتباط{" "}
                    </p>
                  </div>
                  <Switch
                    id="cookie-detection"
                    checked={true}
                    onCheckedChange={() => {}}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="formats" className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">إعدادات التنسيق</h3>
              <p className="text-sm text-muted-foreground">
                قم بتكوين كيفية تنسيق وتنظيم ملفات التدويل.{" "}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="library-type">مكتبة التدويل </Label>
                <Select value={libraryType} onValueChange={setLibraryType}>
                  <SelectTrigger id="library-type">
                    <SelectValue placeholder="Select library" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="react-intl">react-intl</SelectItem>
                    <SelectItem value="i18next">i18next</SelectItem>
                    <SelectItem value="lingui">Lingui</SelectItem>
                    <SelectItem value="formatjs">FormatJS</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  مكتبة التدويل التي يمكنك استخدامها في مشاريعك{" "}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="file-format">تنسيق ملف الترجمة</Label>
                <Select value={fileFormat} onValueChange={setFileFormat}>
                  <SelectTrigger id="file-format">
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="json">JSON</SelectItem>
                    <SelectItem value="yaml">YAML</SelectItem>
                    <SelectItem value="po">PO (Gettext)</SelectItem>
                    <SelectItem value="ts">TypeScript</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  تنسيق الملف لتخزين الترجمات{" "}
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">بنية الملف</h3>
                <p className="text-sm text-muted-foreground">
                  قم بتكوين كيفية تنظيم ملفات الترجمة في مشروعك.{" "}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="file-structure">نمط بنية الملف</Label>
                <Select defaultValue="locale-file">
                  <SelectTrigger id="file-structure">
                    <SelectValue placeholder="Select structure" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="locale-file">
                      /locales/{"{locale}"}/{"{namespace}"}.json
                    </SelectItem>
                    <SelectItem value="namespace-locale">
                      /locales/{"{namespace}"}/{"{locale}"}.json
                    </SelectItem>
                    <SelectItem value="flat">
                      /locales/{"{locale}"}.json
                    </SelectItem>
                    <SelectItem value="custom">هيكل مخصص</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  كيفية تنظيم ملفات الترجمة في مشروعك{" "}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="namespace-strategy">
                  استراتيجية مساحة الاسم
                </Label>
                <Select defaultValue="feature">
                  <SelectTrigger id="namespace-strategy">
                    <SelectValue placeholder="اختر الاستراتيجية" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="feature">
                      حسب الميزة (عام، الملف الشخصي، الإعدادات)
                    </SelectItem>
                    <SelectItem value="page">
                      حسب الصفحة (الرئيسية، حول، لوحة التحكم)
                    </SelectItem>
                    <SelectItem value="component">
                      حسب المكوّن (زر، نموذج، رأس الصفحة)
                    </SelectItem>
                    <SelectItem value="domain">
                      حسب المجال (المستخدم، المنتج، الطلب)
                    </SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  كيفية تنظيم الترجمات في مساحات الأسماء
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="extraction" className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">استخراج الرسائل</h3>
              <p className="text-sm text-muted-foreground">
                قم بتكوين كيفية استخراج الرسائل من الكود الخاص بك.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="extract-messages">
                    استخراج الرسائل تلقائيًا
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    استخراج الرسائل تلقائيًا من الكود أثناء المعالجة
                  </p>
                </div>
                <Switch
                  id="extract-messages"
                  checked={extractMessages}
                  onCheckedChange={setExtractMessages}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-translate">
                    ترجمة الرسائل المستخرجة تلقائيًا
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    ترجمة الرسائل المستخرجة تلقائيًا إلى جميع اللغات المدعومة
                  </p>
                </div>
                <Switch
                  id="auto-translate"
                  checked={autoTranslate}
                  onCheckedChange={setAutoTranslate}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="format-detection">اكتشاف تنسيق ICU</Label>
                  <p className="text-xs text-muted-foreground">
                    اكتشاف والتحقق تلقائيًا من أنماط تنسيق الرسائل ICU
                  </p>
                </div>
                <Switch
                  id="format-detection"
                  checked={formatDetection}
                  onCheckedChange={setFormatDetection}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="pseudo-localization">
                    تمكين الترجمة الزائفة
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    إنشاء ترجمات زائفة لاختبار التدويل دون الحاجة إلى ترجمات
                    فعلية
                  </p>
                </div>
                <Switch
                  id="pseudo-localization"
                  checked={pseudoLocalization}
                  onCheckedChange={setPseudoLocalization}
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">استخراج متقدم</h3>
                <p className="text-sm text-muted-foreground">
                  قم بتكوين الخيارات المتقدمة لاستخراج الرسائل.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="extraction-patterns">أنماط الاستخراج</Label>
                <Input
                  id="extraction-patterns"
                  placeholder="مثال: formatMessage, t, translate"
                  defaultValue="formatMessage,intl.formatMessage,<FormattedMessage"
                />
                <p className="text-xs text-muted-foreground">
                  أنماط مفصولة بفواصل للبحث عنها عند استخراج الرسائل
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ignore-patterns">أنماط التجاهل</Label>
                <Input
                  id="ignore-patterns"
                  placeholder="مثال: node_modules, .git"
                  defaultValue="node_modules,.git,dist,build"
                />
                <p className="text-xs text-muted-foreground">
                  أنماط مفصولة بفواصل لتجاهلها أثناء الاستخراج
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="default-message">
                  استراتيجية الرسائل الافتراضية
                </Label>
                <Select defaultValue="source">
                  <SelectTrigger id="default-message">
                    <SelectValue placeholder="اختر استراتيجية" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="source">
                      استخدام النص الأصلي كافتراضي
                    </SelectItem>
                    <SelectItem value="empty">تركه فارغًا</SelectItem>
                    <SelectItem value="id">استخدام معرف الرسالة</SelectItem>
                    <SelectItem value="pseudo">استخدام ترجمة زائفة</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  كيفية التعامل مع الرسائل الافتراضية للغات غير الافتراضية
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <Separator />

        <div className="flex justify-end">
          <Button>حفظ الإعدادات</Button>
        </div>
      </CardContent>
    </>
  );
}
