"use client";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function NotificationSettings() {
  const handleSave = () => {
    toast("Your notification preferences have been updated.");
  };

  return (
    <>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>
          Configure how and when you receive notifications about your
          internationalization projects.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Email Notifications</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-project-complete">
                  Project completion
                </Label>
                <p className="text-xs text-muted-foreground">
                  Receive an email when internationalization is complete
                </p>
              </div>
              <Switch id="email-project-complete" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-pr-created">Pull request created</Label>
                <p className="text-xs text-muted-foreground">
                  Receive an email when a pull request is created
                </p>
              </div>
              <Switch id="email-pr-created" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-error">Processing errors</Label>
                <p className="text-xs text-muted-foreground">
                  Receive an email when there is an error processing your
                  project
                </p>
              </div>
              <Switch id="email-error" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-digest">Weekly digest</Label>
                <p className="text-xs text-muted-foreground">
                  Receive a weekly summary of your internationalization projects
                </p>
              </div>
              <Switch id="email-digest" />
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">In-App Notifications</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="app-project-complete">Project completion</Label>
                <p className="text-xs text-muted-foreground">
                  Receive a notification when internationalization is complete
                </p>
              </div>
              <Switch id="app-project-complete" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="app-pr-created">Pull request created</Label>
                <p className="text-xs text-muted-foreground">
                  Receive a notification when a pull request is created
                </p>
              </div>
              <Switch id="app-pr-created" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="app-error">Processing errors</Label>
                <p className="text-xs text-muted-foreground">
                  Receive a notification when there is an error processing your
                  project
                </p>
              </div>
              <Switch id="app-error" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="app-translation-update">
                  Translation updates
                </Label>
                <p className="text-xs text-muted-foreground">
                  Receive a notification when translations are updated
                </p>
              </div>
              <Switch id="app-translation-update" />
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Notification Frequency</h3>

          <RadioGroup defaultValue="realtime">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="realtime" id="realtime" />
              <Label htmlFor="realtime">Real-time</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="daily" id="daily" />
              <Label htmlFor="daily">Daily digest</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="weekly" id="weekly" />
              <Label htmlFor="weekly">Weekly digest</Label>
            </div>
          </RadioGroup>
        </div>

        <Separator />

        <div className="flex justify-end">
          <Button onClick={handleSave}>Save Notification Settings</Button>
        </div>
      </CardContent>
    </>
  );
}
