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
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Copy, Eye, EyeOff, Key, RefreshCw, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function ApiSettings() {
  const [apiKey, setApiKey] = useState(
    "sk_live_34f5h6j7k8l9m0n1o2p3q4r5s6t7u8v9"
  );
  const [showApiKey, setShowApiKey] = useState(false);
  const [rateLimit, setRateLimit] = useState(60);

  const generateNewApiKey = () => {
    const newKey =
      "sk_live_" +
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    setApiKey(newKey);

    toast("تم إنشاء مفتاح API جديد. تأكد من نسخه.");
  };

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    toast("تم نسخ مفتاح API إلى الحافظة.");
  };

  return (
    <>
      <CardHeader>
        <CardTitle>إعدادات API</CardTitle>
        <CardDescription>
          إدارة مفاتيح API الخاصة بك وتكوين Webhooks للوصول البرمجي.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">مفاتيح API</h3>
            <p className="text-sm text-muted-foreground">
              استخدم هذه المفاتيح للمصادقة على طلبات API من تطبيقاتك.
            </p>
          </div>

          <div className="rounded-md border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Key className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">مفتاح API الفعّال</h4>
                  <div className="flex items-center gap-2">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      {showApiKey
                        ? apiKey
                        : apiKey.substring(0, 8) + "••••••••••••••••••"}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setShowApiKey(!showApiKey)}
                    >
                      {showApiKey ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={copyApiKey}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={generateNewApiKey}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  إعادة التوليد
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-destructive"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  إلغاء المفتاح
                </Button>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="rate-limit">
                  عدد الطلبات المسموحة بالدقيقة
                </Label>
                <Input
                  id="rate-limit"
                  type="number"
                  value={rateLimit}
                  onChange={(e) =>
                    setRateLimit(Number.parseInt(e.target.value))
                  }
                  className="w-20"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">تم الإنشاء: 14 مارس 2025</Badge>
                <Badge variant="outline">آخر استخدام: قبل ساعتين</Badge>
                <Badge variant="outline">تقييد IP: لا يوجد</Badge>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">استخدام API</h3>
            <p className="text-sm text-muted-foreground">
              مراقبة استخدامك لواجهة API وحدودها
            </p>
          </div>

          <div className="rounded-md border p-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">هذا الشهر</p>
                <p className="text-2xl font-bold">1,245</p>
                <p className="text-sm text-muted-foreground">طلبات API</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">الحد الأقصى</p>
                <p className="text-2xl font-bold">{rateLimit}</p>
                <p className="text-sm text-muted-foreground">طلب/دقيقة</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">حد الخطة</p>
                <p className="text-2xl font-bold">10,000</p>
                <p className="text-sm text-muted-foreground">طلب/شهر</p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex justify-end">
          <Button>حفظ إعدادات API</Button>
        </div>
      </CardContent>
    </>
  );
}
