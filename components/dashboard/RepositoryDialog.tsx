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

  function onSubmit(values: z.infer<typeof reposhema>) {
    // React Query mutation lramzy
    setOpen(false);
    console.log("Submitted values:", values);
  }

  const lang = [
    { label: "Arabic", value: "arabic" },
    { label: "English", value: "english" },
    { label: "French", value: "french" },
    { label: "Spanish", value: "spanish" },
  ];

  const selectedLanguages = form.watch("language") || [];

  const handleDirectoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const directories = e.target.value
      .split(",")
      .map((dir) => dir.trim())
      .filter(Boolean);
    form.setValue("directory", directories);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"secondary"}>
          <Github className="mr-2 h-4 w-4" />
          <span>Add Repository</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <AnimatedContent>
          <DialogHeader>
            <DialogTitle>Add Repository</DialogTitle>
            <DialogDescription>
              Enter the repository details to import it into your project.
            </DialogDescription>
          </DialogHeader>
        </AnimatedContent>
        <AnimatedContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <AnimatedContent>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Repository Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter a name for the repository"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AnimatedContent>
              <AnimatedContent>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter a description" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AnimatedContent>
              <AnimatedContent>
                <FormField
                  control={form.control}
                  name="repoURl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Repository URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://github.com/owner/repo"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AnimatedContent>
              <AnimatedContent>
                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Languages</FormLabel>
                      <FormControl>
                        <Collapsible
                          open={languageOpen}
                          onOpenChange={setLanguageOpen}
                          className="border rounded-md"
                        >
                          <CollapsibleTrigger asChild>
                            <div className="flex items-center justify-between p-2 cursor-pointer hover:bg-muted">
                              <div className="flex flex-wrap gap-1">
                                {selectedLanguages.length > 0 ? (
                                  selectedLanguages.map((lang) => (
                                    <Badge key={lang} variant="secondary">
                                      {lang}
                                    </Badge>
                                  ))
                                ) : (
                                  <span className="text-muted-foreground">
                                    Select languages
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
                          <CollapsibleContent className="p-2 border-t">
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
                                    className="text-sm cursor-pointer"
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
              <AnimatedContent>
                <FormField
                  control={form.control}
                  name="directory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Component Directory</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="src/components, src/pages"
                          value={
                            Array.isArray(field.value)
                              ? field.value.join(", ")
                              : ""
                          }
                          onChange={(e) => handleDirectoryChange(e)}
                        />
                      </FormControl>
                      <FormDescription className="text-xs">
                        Enter multiple directories , separated by commas
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AnimatedContent>
              <AnimatedContent>
                <div className="flex justify-end pt-2">
                  <Button type="submit" className="rounded-md">
                    Import Repository
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
