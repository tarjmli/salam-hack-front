"use client";
import React from 'react';
import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Github } from "lucide-react";
import { Button } from '../ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { set, useForm } from 'react-hook-form';
import { reposhema } from '@/lib/validation/repo.schema';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';




export default function RepositoryDialog() {
    const [open, setOpen] = useState(false);
    const from =useForm<z.infer<typeof reposhema>>({
        resolver: zodResolver(reposhema),
        defaultValues: {
            repoURl: "",
            language: "",
            description: "",
            directory: "",
        }


    })
    function onsubmit (values: z.infer<typeof reposhema>){
        //react query here ramzy
        setOpen(false)
        console.log("submitted")
    }
    const lang = [
        {label :"arabic", value: "arabic"},
        {label :"english", value: "english"},
        {label :"french", value: "french"},
        {label :"spanish", value: "spanish"},
    ]

    return(
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
            <Button variant={"secondary"}>
            <Github className="mr-2 h-4 w-4" />
            <span>Add Repository</span>
            </Button>

            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Repository</DialogTitle>
                    <DialogDescription>Enter the repository details to import it into your project.</DialogDescription>
                </DialogHeader>
                <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="repoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Repository URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://github.com/owner/repo" {...field} />
                  </FormControl>
                  <FormDescription>Enter the full URL of the GitHub repository</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Language</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a language" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {languages.map((language) => (
                        <SelectItem key={language.value} value={language.value}>
                          {language.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Select the primary language of the repository</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="directory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Component Directory</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a directory" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {directories.map((directory) => (
                        <SelectItem key={directory.value} value={directory.value}>
                          {directory.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Select the directory containing components and pages</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit">Import Repository</Button>
            </div>
          </form>
        </Form>

              
            </DialogContent>
            
            </Dialog>
        
    )
}   