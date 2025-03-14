"use client";

import { SelectItem } from "@/components/ui/select";

import { SelectContent } from "@/components/ui/select";

import { SelectValue } from "@/components/ui/select";

import { SelectTrigger } from "@/components/ui/select";

import { Select } from "@/components/ui/select";

import { useState, useEffect } from "react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Moon, Sun, Laptop, Check } from "lucide-react";
import { toast } from "sonner";

export default function AppearanceSettings() {
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState(16);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [colorScheme, setColorScheme] = useState("blue");

  // Simulate getting the theme from the theme provider
  useEffect(() => {
    // This would normally come from your theme context
    const htmlEl = document.documentElement;
    if (htmlEl.classList.contains("dark")) {
      setTheme("dark");
    } else if (htmlEl.classList.contains("light")) {
      setTheme("light");
    } else {
      setTheme("system");
    }
  }, []);

  const handleThemeChange = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme);

    // This would normally update your theme context
    const htmlEl = document.documentElement;
    if (newTheme === "dark") {
      htmlEl.classList.add("dark");
      htmlEl.classList.remove("light");
    } else if (newTheme === "light") {
      htmlEl.classList.add("light");
      htmlEl.classList.remove("dark");
    }

    toast(`Theme set to ${newTheme}.`);
  };

  const handleSaveAppearance = () => {
    toast("Your appearance preferences have been updated.");
  };

  return (
    <>
      <CardHeader>
        <CardTitle>مظهر</CardTitle>
        <CardDescription>قم بتخصيص مظهر التطبيق حسب تفضيلاتك. </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Theme</h3>

          <div className="grid grid-cols-3 gap-4">
            <div
              className={`flex cursor-pointer flex-col items-center justify-center rounded-md border p-4 ${
                theme === "light" ? "border-primary bg-primary/5" : ""
              }`}
              onClick={() => handleThemeChange("light")}
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Sun className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium">ضوء</span>
              {theme === "light" && (
                <div className="absolute right-2 top-2">
                  <Check className="h-4 w-4 text-primary" />
                </div>
              )}
            </div>

            <div
              className={`flex cursor-pointer flex-col items-center justify-center rounded-md border p-4 ${
                theme === "dark" ? "border-primary bg-primary/5" : ""
              }`}
              onClick={() => handleThemeChange("dark")}
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Moon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium">مظلم</span>
              {theme === "dark" && (
                <div className="absolute right-2 top-2">
                  <Check className="h-4 w-4 text-primary" />
                </div>
              )}
            </div>

            <div
              className={`flex cursor-pointer flex-col items-center justify-center rounded-md border p-4 ${
                theme === "system" ? "border-primary bg-primary/5" : ""
              }`}
              onClick={() => handleThemeChange("system")}
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Laptop className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium">نظام</span>
              {theme === "system" && (
                <div className="absolute right-2 top-2">
                  <Check className="h-4 w-4 text-primary" />
                </div>
              )}
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Color Scheme</h3>

          <RadioGroup
            value={colorScheme}
            onValueChange={setColorScheme}
            className="grid grid-cols-3 gap-4"
          >
            {["blue", "green", "purple", "orange", "pink", "gray"].map(
              (color) => (
                <div key={color} className="relative">
                  <RadioGroupItem
                    value={color}
                    id={`color-${color}`}
                    className="sr-only"
                  />
                  <Label
                    htmlFor={`color-${color}`}
                    className={`flex cursor-pointer flex-col items-center justify-center rounded-md border p-4 hover:border-primary ${
                      colorScheme === color ? "border-primary bg-primary/5" : ""
                    }`}
                  >
                    <div
                      className={`mb-2 h-10 w-10 rounded-full`}
                      style={{
                        backgroundColor:
                          color === "blue"
                            ? "#3b82f6"
                            : color === "green"
                            ? "#10b981"
                            : color === "purple"
                            ? "#8b5cf6"
                            : color === "orange"
                            ? "#f97316"
                            : color === "pink"
                            ? "#ec4899"
                            : "#6b7280",
                      }}
                    />
                    <span className="text-sm font-medium capitalize">
                      {color}
                    </span>
                    {colorScheme === color && (
                      <div className="absolute right-2 top-2">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                    )}
                  </Label>
                </div>
              )
            )}
          </RadioGroup>
        </div>

        <Separator />

        <div className="space-y-4">
          <p className="text-lg font-medium">إمكانية الوصول</p>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="animations">تفعيل الحركات</Label>
                <p className="text-xs text-muted-foreground">
                  عرض الحركات عبر الواجهة بالكامل
                </p>
              </div>
              <Switch
                id="animations"
                checked={animationsEnabled}
                onCheckedChange={setAnimationsEnabled}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="reduced-motion">تقليل الحركة</Label>
                <p className="text-xs text-muted-foreground">
                  تقليل الحركات للمستخدمين الذين يفضلون حركة أقل
                </p>
              </div>
              <Switch
                id="reduced-motion"
                checked={reducedMotion}
                onCheckedChange={setReducedMotion}
                disabled={!animationsEnabled}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="font-size">حجم الخط ({fontSize}px)</Label>
                <p className="text-sm text-muted-foreground">{fontSize}px</p>
              </div>
              <Slider
                id="font-size"
                min={12}
                max={24}
                step={1}
                value={[fontSize]}
                onValueChange={(value) => setFontSize(value[0])}
              />
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">التخطيط</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="sidebar-collapsed">
                  شريط جانبي مطوي افتراضيًا
                </Label>
                <p className="text-xs text-muted-foreground">
                  ابدأ بتصغير الشريط الجانبي عند فتح التطبيق
                </p>
              </div>
              <Switch
                id="sidebar-collapsed"
                checked={sidebarCollapsed}
                onCheckedChange={setSidebarCollapsed}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="content-width">عرض المحتوى</Label>
                <p className="text-xs text-muted-foreground">
                  اختر كيف يتم عرض المحتوى عبر الشاشة
                </p>
              </div>
              <Select defaultValue="responsive">
                <SelectTrigger id="content-width" className="w-40">
                  <SelectValue placeholder="اختر العرض" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="responsive">متجاوب</SelectItem>
                  <SelectItem value="full">عرض كامل</SelectItem>
                  <SelectItem value="contained">محتوى محدود</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex justify-end">
          <Button onClick={handleSaveAppearance}>حفظ إعدادات المظهر</Button>
        </div>
      </CardContent>
    </>
  );
}
