"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  bio: z.string().max(160).optional(),
  urls: z
    .object({
      github: z
        .string()
        .url({ message: "Please enter a valid URL." })
        .optional()
        .or(z.literal("")),
      website: z
        .string()
        .url({ message: "Please enter a valid URL." })
        .optional()
        .or(z.literal("")),
    })
    .optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {
  username: "johndoe",
  email: "john.doe@example.com",
  bio: "Full-stack developer with a passion for internationalization and accessibility.",
  urls: {
    github: "https://github.com/johndoe",
    website: "https://johndoe.dev",
  },
};

export default function ProfileSettings() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast("Your profile has been updated successfully.");
      console.log(data);
    }, 1000);
  }

  return (
    <>
      <CardHeader>
        <CardTitle>الملف الشخصي</CardTitle>
        <CardDescription>
          قم بإدارة معلوماتك الشخصية وكيفية ظهورها عبر المنصة.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/placeholder.svg" alt="الملف الشخصي" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <Button variant="outline" size="sm">
              تغيير الصورة الشخصية
            </Button>
            <p className="mt-2 text-xs text-muted-foreground">
              JPG، GIF أو PNG. الحد الأقصى 1MB.
            </p>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>اسم المستخدم</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe" {...field} />
                  </FormControl>
                  <FormDescription>
                    هذا هو اسم العرض العام الخاص بك.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>البريد الإلكتروني</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    سنستخدم هذا البريد الإلكتروني للإشعارات واستعادة الحساب.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نبذة عنك</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="أخبرنا قليلاً عن نفسك"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    وصف موجز لملفك الشخصي. الحد الأقصى 160 حرفًا
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="urls.github"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GitHub</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://github.com/username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="urls.website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الموقع الإلكتروني</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "جارٍ الحفظ..." : "حفظ التغييرات"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </>
  );
}
