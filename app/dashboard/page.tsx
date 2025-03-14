
import AnimatedContent from "@/components/animation/Animatedcontent";
import Magnet from "@/components/animation/magnet";
import Ribbons from "@/components/animation/ribbons";
import { TextHoverEffect } from "@/components/animation/Texthovereffect";
import RepositoryDialog from "@/components/dashboard/RepositoryDialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DialogHeader } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GithubApi from "@/lib/api/github";
import { Dialog, DialogContent, DialogDescription, DialogPortal, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { Portal } from "@radix-ui/react-portal";
import { Github, Globe, Clock, ArrowRight } from "lucide-react";

// This would be a protected route in a real application
export default async function DashboardPage() {
  // Redirect to home if not authenticated
  // const isAuthenticated = false;
  // if (!isAuthenticated) redirect("/");

  const { data: repos } = await GithubApi.fetchRepos();
  return (
    <div className="container mx-auto p-4">
      
      <div className=" relative mb-8 flex items-center justify-between">
      {/* <div style={{ height: '100px', position: 'relative', overflow: 'hidden'}}>
      <Ribbons
    baseThickness={30}
    colors={['#ffffff']}
    speedMultiplier={0.5}
    maxAge={500}
    enableFade={false}
    enableShaderEffect={true}
  /> */}
  {/* <div className="flex items-center space-x-4 text-white">
 <TextHoverEffect  text="Dashboard"  duration={230} />
 </div> */}
 
        <h1 className="text-3xl font-semibold">Dashboard</h1>
 
  

      
        {/* </div> */}
        <Magnet>
       <RepositoryDialog/>
       </Magnet>
      

      </div>

      <Tabs defaultValue="projects" className="space-y-4">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Projects
                </CardTitle>
                <Globe className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  +2 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Languages Supported
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">54</div>
                <p className="text-xs text-muted-foreground">
                  +5 new languages added
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Recent Activity
                </CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24h ago</div>
                <p className="text-xs text-muted-foreground">
                  Last project processed
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="mt-8 text-xl font-semibold">Recent Projects</h2>
          <div className="rounded-md border">
            {repos.map((repo, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b p-4 last:border-0"
              >
                <div>
                  <div className="font-medium">{repo.name}</div>
                  <div className="text-sm text-muted-foreground">
                    Added internationalization {i} day{i !== 1 ? "s" : ""} ago
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>
                View statistics about your internationalization projects
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">
                Analytics dashboard coming soon
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Manage your account and project preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">
                Settings dashboard coming soon
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    
    </div>
  );
}
