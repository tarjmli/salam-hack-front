import * as z from "zod";
export const reposhema = z.object({
  name: z.string().min(1, "Please enter a name"),
  repo_url: z.string().url(),
  language: z.array(z.string()).min(1, "Please enter a language"),
  description: z.string().min(1, "Please enter a description"),
  directory: z.array(z.string()).min(1, "Please enter a directory"),
});
