import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RepoList from "@/components/dashboard/Repositories";
import TemplateSection from "@/components/dashboard/Templates";
import GithubApi from "@/lib/api/github";
import RepositoryDialog from "@/components/dashboard/RepositoryDialog";
import { Clock, Globe } from "lucide-react";
import Link from "next/link";

export default async function Dashboard() {
  const { data: repos } = await GithubApi.fetchRepos();
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href={"/"}>
              <span className="text-xl font-bold">Tarjemli</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Docs
            </Button>
            <Button variant="ghost" size="sm">
              Help
            </Button>
            <Link href={"/dashboard/settings"}>
              <Button variant="ghost" size="sm">
                Settings
              </Button>
            </Link>
            <Button variant="outline" size="sm">
              Feedback
            </Button>
            <div className="h-8 w-8 rounded-full bg-primary"></div>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Let&apos;s build something new.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Import a GitHub repository to add internationalization with
            react-intl or get started with one of our templates.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl py-8">
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

        <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row">
          <div className="flex-1 rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">
              Import Git Repository
            </h2>

            <div className="mb-6 flex items-center gap-2">
              <RepositoryDialog />
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Search repositories..."
                  className="pl-10"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <RepoList repos={repos} />
          </div>

          <div className="flex-1 rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Templates</h2>
              <Button variant="outline" size="sm">
                Framework
              </Button>
            </div>

            <TemplateSection />
          </div>
        </div>
      </main>
    </div>
  );
}
