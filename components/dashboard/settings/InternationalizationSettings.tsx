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
        <CardTitle>Internationalization Settings</CardTitle>
        <CardDescription>
          Configure how internationalization is applied to your projects.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="locales" className="space-y-4">
          <TabsList>
            <TabsTrigger value="locales" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>Locales</span>
            </TabsTrigger>
            <TabsTrigger value="formats" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Formats</span>
            </TabsTrigger>
            <TabsTrigger value="extraction" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span>Extraction</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="locales" className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Supported Locales</h3>
              <p className="text-sm text-muted-foreground">
                Manage the languages your application will support.
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
                    {locale.default && <Badge className="ml-1">Default</Badge>}
                    {!locale.default && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-5 w-5 rounded-full"
                        onClick={() => handleSetDefaultLocale(locale.code)}
                      >
                        <Check className="h-3 w-3" />
                        <span className="sr-only">Set as default</span>
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-5 w-5 rounded-full"
                      onClick={() => handleRemoveLocale(locale.code)}
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-end gap-2">
                <div className="space-y-2">
                  <Label htmlFor="locale-code">Locale Code</Label>
                  <Input
                    id="locale-code"
                    placeholder="e.g., zh-CN"
                    value={newLocale}
                    onChange={(e) => setNewLocale(e.target.value)}
                    className="w-24"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="locale-name">Locale Name</Label>
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
                <h3 className="text-lg font-medium">Locale Detection</h3>
                <p className="text-sm text-muted-foreground">
                  Configure how locales are detected in your application.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="browser-detection">
                      Browser language detection
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Automatically detect and use the user is browser language
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
                    <Label htmlFor="url-detection">URL path detection</Label>
                    <p className="text-xs text-muted-foreground">
                      Use URL paths to determine the current locale (e.g.,
                      /fr/about)
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
                      Cookie-based detection
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Store and retrieve the user is preferred locale from
                      cookies
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
              <h3 className="text-lg font-medium">Format Settings</h3>
              <p className="text-sm text-muted-foreground">
                Configure how internationalization files are formatted and
                structured.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="library-type">
                  Internationalization Library
                </Label>
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
                  The internationalization library to use in your projects
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="file-format">Translation File Format</Label>
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
                  The file format for storing translations
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">File Structure</h3>
                <p className="text-sm text-muted-foreground">
                  Configure how translation files are organized in your project.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="file-structure">File Structure Pattern</Label>
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
                    <SelectItem value="custom">Custom structure</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  How translation files are organized in your project
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="namespace-strategy">Namespace Strategy</Label>
                <Select defaultValue="feature">
                  <SelectTrigger id="namespace-strategy">
                    <SelectValue placeholder="Select strategy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="feature">
                      Feature-based (common, profile, settings)
                    </SelectItem>
                    <SelectItem value="page">
                      Page-based (home, about, dashboard)
                    </SelectItem>
                    <SelectItem value="component">
                      Component-based (button, form, header)
                    </SelectItem>
                    <SelectItem value="domain">
                      Domain-based (user, product, order)
                    </SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  How to organize translations into namespaces
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="extraction" className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Message Extraction</h3>
              <p className="text-sm text-muted-foreground">
                Configure how messages are extracted from your codebase.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="extract-messages">
                    Automatic message extraction
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Automatically extract messages from your code during
                    processing
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
                    Auto-translate extracted messages
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Automatically translate extracted messages to all supported
                    locales
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
                  <Label htmlFor="format-detection">ICU format detection</Label>
                  <p className="text-xs text-muted-foreground">
                    Automatically detect and validate ICU message format
                    patterns
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
                    Enable pseudo-localization
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Generate pseudo-translations to test internationalization
                    without real translations
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
                <h3 className="text-lg font-medium">Advanced Extraction</h3>
                <p className="text-sm text-muted-foreground">
                  Configure advanced options for message extraction.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="extraction-patterns">Extraction Patterns</Label>
                <Input
                  id="extraction-patterns"
                  placeholder="e.g., formatMessage, t, translate"
                  defaultValue="formatMessage,intl.formatMessage,<FormattedMessage"
                />
                <p className="text-xs text-muted-foreground">
                  Comma-separated patterns to look for when extracting messages
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ignore-patterns">Ignore Patterns</Label>
                <Input
                  id="ignore-patterns"
                  placeholder="e.g., node_modules, .git"
                  defaultValue="node_modules,.git,dist,build"
                />
                <p className="text-xs text-muted-foreground">
                  Comma-separated patterns to ignore during extraction
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="default-message">
                  Default Message Strategy
                </Label>
                <Select defaultValue="source">
                  <SelectTrigger id="default-message">
                    <SelectValue placeholder="Select strategy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="source">
                      Use source text as default
                    </SelectItem>
                    <SelectItem value="empty">Leave empty</SelectItem>
                    <SelectItem value="id">Use message ID</SelectItem>
                    <SelectItem value="pseudo">
                      Use pseudo-translation
                    </SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  How to handle default messages for non-default locales
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <Separator />

        <div className="flex justify-end">
          <Button>Save Settings</Button>
        </div>
      </CardContent>
    </>
  );
}
