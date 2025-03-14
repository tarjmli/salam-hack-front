"use client";

import { Button } from "@/components/ui/button";
import { IRepo } from "@/types/github";
import { Clock, Lock } from "lucide-react";

type Props = {
  repos: IRepo[];
};

export default function RepoList({ repos }: Props) {
  return (
    <div className="space-y-2">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="flex items-center justify-between rounded-md border p-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              {repo.isPrivate ? (
                <Lock className="h-4 w-4 text-primary" />
              ) : (
                <svg
                  className="h-4 w-4 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              )}
            </div>
            <div>
              <div className="font-medium">{repo.name}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{repo.updatedAt}</span>
              </div>
            </div>
          </div>
          <Button>Import</Button>
        </div>
      ))}
    </div>
  );
}
