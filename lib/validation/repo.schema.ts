 import * as z from 'zod';
export const reposhema =z.object({
    repoURl : z.string().url(),
    language :z.string().min(1, "Please enter  more than a language"),
    description : z.string().min(1, "Please enter a description"),
    directory : z.string().min(1, "Please enter a directory"),
})