"use client";

import { useState } from "react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Copy, Eye, EyeOff, Key, RefreshCw, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function ApiSettings() {
  const [apiKey, setApiKey] = useState(
    "sk_live_34f5h6j7k8l9m0n1o2p3q4r5s6t7u8v9"
  );
  const [showApiKey, setShowApiKey] = useState(false);
  const [rateLimit, setRateLimit] = useState(60);
  const [webhookUrl, setWebhookUrl] = useState("https://example.com/webhook");
  const [webhookEnabled, setWebhookEnabled] = useState(true);

  const generateNewApiKey = () => {
    // In a real app, this would call an API to generate a new key
    const newKey =
      "sk_live_" +
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    setApiKey(newKey);

    toast({
      title: "New API key generated",
      description: "Your new API key has been generated. Make sure to copy it.",
    });
  };

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey);

    toast({
      title: "API key copied",
      description: "Your API key has been copied to the clipboard.",
    });
  };

  return (
    <>
      <CardHeader>
        <CardTitle>API Settings</CardTitle>
        <CardDescription>
          Manage your API keys and configure webhooks for programmatic access.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">API Keys</h3>
            <p className="text-sm text-muted-foreground">
              Use these keys to authenticate API requests from your
              applications.
            </p>
          </div>

          <div className="rounded-md border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Key className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Live API Key</h4>
                  <div className="flex items-center gap-2">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      {showApiKey
                        ? apiKey
                        : apiKey.substring(0, 8) + "••••••••••••••••••"}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setShowApiKey(!showApiKey)}
                    >
                      {showApiKey ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                      <span className="sr-only">
                        {showApiKey ? "Hide API key" : "Show API key"}
                      </span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={copyApiKey}
                    >
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy API key</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={generateNewApiKey}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Regenerate
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-destructive"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Revoke
                </Button>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="rate-limit">
                  Rate Limit (requests per minute)
                </Label>
                <Input
                  id="rate-limit"
                  type="number"
                  value={rateLimit}
                  onChange={(e) =>
                    setRateLimit(Number.parseInt(e.target.value))
                  }
                  className="w-20"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Created: Mar 14, 2025</Badge>
                <Badge variant="outline">Last used: 2 hours ago</Badge>
                <Badge variant="outline">IP restriction: None</Badge>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Webhooks</h3>
            <p className="text-sm text-muted-foreground">
              Configure webhooks to receive real-time updates about your
              internationalization projects.
            </p>
          </div>

          <div className="rounded-md border p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Project Webhook</h4>
                <p className="text-sm text-muted-foreground">
                  Receive notifications when projects are processed
                </p>
              </div>
              <Switch
                checked={webhookEnabled}
                onCheckedChange={setWebhookEnabled}
              />
            </div>

            <div className="mt-4 space-y-2">
              <Label htmlFor="webhook-url">Webhook URL</Label>
              <Input
                id="webhook-url"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                disabled={!webhookEnabled}
              />

              <div className="space-y-2">
                <p className="text-sm font-medium">Events</p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="event-project-created"
                      defaultChecked
                      disabled={!webhookEnabled}
                    />
                    <Label htmlFor="event-project-created">
                      project.created
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="event-project-updated"
                      defaultChecked
                      disabled={!webhookEnabled}
                    />
                    <Label htmlFor="event-project-updated">
                      project.updated
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="event-project-completed"
                      defaultChecked
                      disabled={!webhookEnabled}
                    />
                    <Label htmlFor="event-project-completed">
                      project.completed
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="event-project-failed"
                      defaultChecked
                      disabled={!webhookEnabled}
                    />
                    <Label htmlFor="event-project-failed">project.failed</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="event-translation-updated"
                      defaultChecked
                      disabled={!webhookEnabled}
                    />
                    <Label htmlFor="event-translation-updated">
                      translation.updated
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="event-pr-created"
                      defaultChecked
                      disabled={!webhookEnabled}
                    />
                    <Label htmlFor="event-pr-created">pr.created</Label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button variant="outline">Add Webhook</Button>
        </div>

        <Separator />

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">API Usage</h3>
            <p className="text-sm text-muted-foreground">
              Monitor your API usage and limits.
            </p>
          </div>

          <div className="rounded-md border p-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold">1,245</p>
                <p className="text-sm text-muted-foreground">API requests</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Rate Limit</p>
                <p className="text-2xl font-bold">{rateLimit}</p>
                <p className="text-sm text-muted-foreground">requests/minute</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Plan Limit</p>
                <p className="text-2xl font-bold">10,000</p>
                <p className="text-sm text-muted-foreground">requests/month</p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex justify-end">
          <Button>Save API Settings</Button>
        </div>
      </CardContent>
    </>
  );
}
