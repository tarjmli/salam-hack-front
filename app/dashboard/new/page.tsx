import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import RepoList from "@/components/dashboard/Repositories";
import TemplateSection from "@/components/dashboard/Templates";
import GithubApi from "@/lib/api/github";

export default async function Dashboard() {
  const { data: repos } = await GithubApi.fetchRepos();
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">IntlHub</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Docs
            </Button>
            <Button variant="ghost" size="sm">
              Help
            </Button>
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

        <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row">
          <div className="flex-1 rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">
              Import Git Repository
            </h2>

            <div className="mb-6 flex items-center gap-2">
              <Button className="flex items-center gap-2" variant="outline">
                <Github className="h-4 w-4" />
                <span>Connect to GitHub</span>
              </Button>
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
