"use client";
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
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import AnimatedContent from "@/components/animation/Animatedcontent";
import { useCreateRepoMutation } from "@/lib/services/github.service";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

// Yup validation schema
const repoSchema = yup.object({
  name: yup.string().required("اسم المستودع مطلوب"),
  repo_url: yup
    .string()
    .required("رابط المستودع مطلوب")
    .url("يجب أن يكون رابط صالح")
    .matches(
      /^https?:\/\/(www\.)?github\.com\/[\w-]+\/[\w-]+$/,
      "يجب أن يكون رابط مستودع GitHub صالح"
    ),
  description: yup.string(),
  language: yup
    .array()
    .of(yup.string())
    .min(1, "يجب اختيار لغة واحدة على الأقل"),
  directory: yup.array().of(yup.string()),
});

// Form values type
interface RepoFormValues {
  name: string;
  repo_url: string;
  description: string;
  language: string[];
  directory: string[];
}

export default function RepositoryDialog() {
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const initialValues: RepoFormValues = {
    name: "",
    repo_url: "",
    description: "",
    language: [],
    directory: ["src/components"],
  };

  const lang = [
    { label: "العربية", value: "ar" },
    { label: "الإنجليزية", value: "en" },
    { label: "الفرنسية", value: "fr" },
    { label: "الإسبانية", value: "sp" },
  ];

  const { mutateAsync: createRepo } = useCreateRepoMutation();

  const handleSubmit = async (values: RepoFormValues) => {
    console.log("e", values);
    try {
      const response = await createRepo(values);
      console.log({ response });
    } catch (e) {
      console.log("error", e);
    } finally {
      setOpen(false);
    }
  };

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
          <Formik
            initialValues={initialValues}
            validationSchema={repoSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form className="space-y-4">
                {/* Repository Name */}
                <AnimatedContent>
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium dark:text-dark-foreground"
                    >
                      اسم المستودع
                    </label>
                    <Field
                      as={Input}
                      id="name"
                      name="name"
                      placeholder="أدخل اسمًا للمستودع"
                      className="dark:border-dark-muted dark:bg-dark-elevation-1 dark:text-dark-foreground"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-sm text-destructive"
                    />
                  </div>
                </AnimatedContent>

                {/* Repository Description */}
                <AnimatedContent>
                  <div className="space-y-2">
                    <label
                      htmlFor="description"
                      className="text-sm font-medium dark:text-dark-foreground"
                    >
                      الوصف
                    </label>
                    <Field
                      as={Input}
                      id="description"
                      name="description"
                      placeholder="أدخل وصفًا"
                      className="dark:border-dark-muted dark:bg-dark-elevation-1 dark:text-dark-foreground"
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="text-sm text-destructive"
                    />
                  </div>
                </AnimatedContent>

                {/* Repository URL */}
                <AnimatedContent>
                  <div className="space-y-2">
                    <label
                      htmlFor="repo_url"
                      className="text-sm font-medium dark:text-dark-foreground"
                    >
                      رابط المستودع
                    </label>
                    <Field
                      as={Input}
                      id="repo_url"
                      name="repo_url"
                      placeholder="https://github.com/owner/repo"
                      className="dark:border-dark-muted dark:bg-dark-elevation-1 dark:text-dark-foreground"
                    />
                    <ErrorMessage
                      name="repo_url"
                      component="div"
                      className="text-sm text-destructive"
                    />
                  </div>
                </AnimatedContent>

                {/* Languages Selection */}
                <AnimatedContent>
                  <div className="space-y-2">
                    <label className="text-sm font-medium dark:text-dark-foreground">
                      اللغات
                    </label>
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
                            {values.language.length > 0 ? (
                              values.language.map((lang) => (
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
                                checked={values.language.includes(
                                  language.value
                                )}
                                onCheckedChange={(checked) => {
                                  const newValue = checked
                                    ? [...values.language, language.value]
                                    : values.language.filter(
                                        (v) => v !== language.value
                                      );
                                  setFieldValue("language", newValue);
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
                    <ErrorMessage
                      name="language"
                      component="div"
                      className="text-sm text-destructive"
                    />
                  </div>
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
              </Form>
            )}
          </Formik>
        </AnimatedContent>
      </DialogContent>
    </Dialog>
  );
}
