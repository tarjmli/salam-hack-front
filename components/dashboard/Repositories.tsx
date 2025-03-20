"use client";

import { IRepo } from "@/types/github";
import { Folder, Globe } from "lucide-react";
import TranslateDialog from "./TranslateDialog";
// import { useTarjimQuery } from "@/lib/services/github.service";

type Props = {
  repos: IRepo[];
};

export default function RepoList({ repos }: Props) {
  console.log({ repos });
  // const { data } = useTarjimQuery();

  // console.log({ data });

  return (
    <div className="space-y-2">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="flex items-center justify-between rounded-md border p-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <Globe className="h-4 w-4 text-primary" />
            </div>

            <div>
              <div className="font-medium">{repo.name}</div>
              <div className="text-xs text-muted-foreground">
                {repo.description ? repo.description : "لا يوجد وصف"}
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <Folder className="h-3 w-3" />
                <span>{repo.directory.length} مجلد</span>
              </div>
            </div>
          </div>

          {/* Bouton de traduction */}
          <TranslateDialog />
        </div>
      ))}
    </div>
  );
}
