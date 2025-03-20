import { Input } from "@/components/ui/input";
import RepoList from "@/components/dashboard/Repositories";
import GithubApi from "@/lib/api/github";
import RepositoryDialog from "@/components/dashboard/RepositoryDialog";
import { ChartBar, Clock, Globe } from "lucide-react";
import { Dashmain } from "@/components/dashboard/dashpage/dashmain";
import { Dashcard } from "@/components/dashboard/dashpage/dashbaordcard";
import { useTarjimQuery } from "@/lib/services/github.service";
const element = [
  {
    id: 1,
    name: "المشاريع النشطة",
    icon: <Globe className="h-4 w-4 text-muted-foreground" />,
    subtitle: " 12",
    thirdtitle: "+2 عن الشهر الماضي",
  },
  {
    id: 2,
    name: "اللغات المدعومة",
    icon: <Clock className="h-4 w-4 text-muted-foreground" />,
    subtitle: "54",
    thirdtitle: " +5 لغات جديدة مضافة",
  },
  {
    id: 3,
    name: "النشاط الأخير",
    icon: <ChartBar className="h-4 w-4 text-muted-foreground" />,
    subtitle: "24 ساعة",
    thirdtitle: "آخر مشروع تمت معالجته",
  },
];
export default async function Dashboard() {
  const repos = await GithubApi.fetchRepos();
  console.log(repos);

  return (
    <div className="min-h-screen bg-background">
      <main className="container my-2 px-4 py-8">
        <Dashmain />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl py-6">
          {element.map((el) => (
            <Dashcard
              key={el.id}
              icon={el.icon}
              title={el.name}
              subtitle={el.subtitle}
              thirdtitle={el.thirdtitle}
            />
          ))}
        </div>

        <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row">
          <div className="flex-1 rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">استيراد مستودع</h2>

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
        </div>
      </main>
    </div>
  );
}
