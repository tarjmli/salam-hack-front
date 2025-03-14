"use client";

import { useState } from "react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Github, GitBranch, GitPullRequest, RefreshCw } from "lucide-react";
import { toast } from "sonner";

export default function IntegrationSettings() {
  const [isConnected, setIsConnected] = useState(true);
  const [autoSync, setAutoSync] = useState(true);
  const [createPR, setCreatePR] = useState(true);
  const [defaultBranch, setDefaultBranch] = useState("i18n/add-translations");

  const handleDisconnect = () => {
    setIsConnected(false);
    toast.success("Your GitHub account has been disconnected");
  };

  const handleConnect = () => {
    setIsConnected(true);
    toast("Your GitHub account has been connected successfully");
  };

  return (
    <>
      <CardHeader>
        <CardTitle>Integrations</CardTitle>
        <CardDescription>
          Connect and manage third-party services to enhance your
          internationalization workflow.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Github className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium">GitHub</h3>
                <p className="text-sm text-muted-foreground">
                  {isConnected
                    ? "Connected as johndoe"
                    : "Connect your GitHub account to import repositories"}
                </p>
              </div>
            </div>
            {isConnected ? (
              <Button variant="outline" onClick={handleDisconnect}>
                Disconnect
              </Button>
            ) : (
              <Button onClick={handleConnect}>Connect</Button>
            )}
          </div>

          {isConnected && (
            <div className="mt-4 space-y-4">
              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">GitHub Settings</h4>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-sync">Auto-sync repositories</Label>
                    <p className="text-xs text-muted-foreground">
                      Automatically sync your repositories every hour
                    </p>
                  </div>
                  <Switch
                    id="auto-sync"
                    checked={autoSync}
                    onCheckedChange={setAutoSync}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="create-pr">Create pull requests</Label>
                    <p className="text-xs text-muted-foreground">
                      Automatically create pull requests with
                      internationalization changes
                    </p>
                  </div>
                  <Switch
                    id="create-pr"
                    checked={createPR}
                    onCheckedChange={setCreatePR}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="default-branch">Default branch name</Label>
                  <div className="flex items-center gap-2">
                    <GitBranch className="h-4 w-4 text-muted-foreground" />
                    <Input
                      id="default-branch"
                      value={defaultBranch}
                      onChange={(e) => setDefaultBranch(e.target.value)}
                      className="max-w-xs"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Branch name for internationalization changes
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="h-8">
                    <RefreshCw className="mr-2 h-3.5 w-3.5" />
                    Sync repositories
                  </Button>
                  <Button variant="outline" size="sm" className="h-8">
                    <GitPullRequest className="mr-2 h-3.5 w-3.5" />
                    View pull requests
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Translation Service Integration */}
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary"
                >
                  <path d="m5 8 6 6" />
                  <path d="m4 14 6-6 2-3" />
                  <path d="M2 5h12" />
                  <path d="M7 2h1" />
                  <path d="m22 22-5-10-5 10" />
                  <path d="M14 18h6" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Translation API</h3>
                <p className="text-sm text-muted-foreground">
                  Connect to a translation service for automatic translations
                </p>
              </div>
            </div>
            <Button variant="outline">Connect</Button>
          </div>
        </div>

        {/* CI/CD Integration */}
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">CI/CD Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Integrate with CI/CD pipelines for automated
                  internationalization
                </p>
              </div>
            </div>
            <Button variant="outline">Connect</Button>
          </div>
        </div>
      </CardContent>
    </>
  );
}
