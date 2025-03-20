"use client";
import type React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, ChevronDown } from "lucide-react";
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
import type * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { reposhema } from "@/lib/validation/repo.schema";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import AnimatedContent from "../animation/Animatedcontent";
import { useCreateRepoMutation } from "@/lib/services/github.service";

export default function RepositoryDialog() {
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const form = useForm<z.infer<typeof reposhema>>({
    resolver: zodResolver(reposhema),
    defaultValues: {
      name: "",
      repoURl: "",
      description: "",
      language: [],
      directory: [],
    },
  });

  async function onSubmit(values: z.infer<typeof reposhema>) {
    try {
      console.log({ Hh: values });
      const response = await createRepo(values);
    } catch (e) {
      console.log("error", e);
    } finally {
      setOpen(false);
    }
  }

  const lang = [
    { label: "العربية", value: "arabic" },
    { label: "الإنجليزية", value: "english" },
    { label: "الفرنسية", value: "french" },
    { label: "الإسبانية", value: "spanish" },
  ];

  const selectedLanguages = form.watch("language") || [];

  const handleDirectoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const directories = e.target.value
      .split(",")
      .map((dir) => dir.trim())
      .filter(Boolean);
    form.setValue("directory", directories);
  };

  const { mutateAsync: createRepo } = useCreateRepoMutation();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"secondary"}>
          <Github className="mr-2 h-4 w-4" />
          <span>إضافة مستودع</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-black sm:max-w-[425px] opacity-100 !important transition-none">
        <AnimatedContent>
          <DialogHeader>
            <DialogTitle>إضافة مستودع</DialogTitle>
            <DialogDescription className="dark:text-dark-foreground">
              أدخل تفاصيل المستودع لاستيراده إلى مشروعك.
            </DialogDescription>
          </DialogHeader>
        </AnimatedContent>

        <AnimatedContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Repository Name */}
              <AnimatedContent>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-dark-foreground">
                        اسم المستودع
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="أدخل اسمًا للمستودع"
                          className="dark:border-dark-muted dark:bg-dark-elevation-1 dark:text-dark-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AnimatedContent>

              {/* Repository Description */}
              <AnimatedContent>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-dark-foreground">
                        الوصف
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="أدخل وصفًا"
                          className="dark:border-dark-muted dark:bg-dark-elevation-1 dark:text-dark-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AnimatedContent>

              {/* Repository URL */}
              <AnimatedContent>
                <FormField
                  control={form.control}
                  name="repoURl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-dark-foreground">
                        رابط المستودع
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://github.com/owner/repo"
                          {...field}
                          className="dark:border-dark-muted dark:bg-dark-elevation-1 dark:text-dark-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AnimatedContent>

              {/* Languages Selection */}
              <AnimatedContent>
                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-dark-foreground">
                        اللغات
                      </FormLabel>
                      <FormControl>
                        <Collapsible
                          open={languageOpen}
                          onOpenChange={(isOpen) => {
                            if (!isOpen) return;
                            setLanguageOpen(isOpen);
                          }}
                          className="border rounded-md dark:border-dark-muted"
                        >
                          <CollapsibleTrigger asChild>
                            <div className="flex items-center justify-between p-2 cursor-pointer hover:bg-muted dark:hover:bg-dark-elevation-1">
                              <div className="flex flex-wrap gap-1">
                                {selectedLanguages.length > 0 ? (
                                  selectedLanguages.map((lang) => (
                                    <Badge
                                      key={lang}
                                      variant="secondary"
                                      className="dark:text-dark-foreground"
                                    >
                                      {lang}
                                    </Badge>
                                  ))
                                ) : (
                                  <span className="text-muted-foreground dark:text-dark-foreground">
                                    اختر اللغات
                                  </span>
                                )}
                              </div>
                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${
                                  languageOpen ? "transform rotate-180" : ""
                                }`}
                              />
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="p-2 border-t dark:border-dark-muted">
                            <div className="grid grid-cols-2 gap-2">
                              {lang.map((language) => (
                                <div
                                  key={language.value}
                                  className="flex items-center space-x-2"
                                >
                                  <Checkbox
                                    id={`language-${language.value}`}
                                    checked={field.value?.includes(
                                      language.value
                                    )}
                                    onCheckedChange={(checked) => {
                                      const newValue = checked
                                        ? [
                                            ...(field.value || []),
                                            language.value,
                                          ]
                                        : field.value?.filter(
                                            (v) => v !== language.value
                                          ) || [];
                                      field.onChange(newValue);
                                    }}
                                  />
                                  <label
                                    htmlFor={`language-${language.value}`}
                                    className="text-sm cursor-pointer dark:text-dark-foreground"
                                  >
                                    {language.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AnimatedContent>

              {/* Submit Button */}
              <AnimatedContent>
                <div className="flex justify-end pt-2">
                  <Button
                    type="submit"
                    className="rounded-md dark:text-dark-foreground"
                  >
                    استيراد المستودع
                  </Button>
                </div>
              </AnimatedContent>
            </form>
          </Form>
        </AnimatedContent>
      </DialogContent>
    </Dialog>
  );
}
