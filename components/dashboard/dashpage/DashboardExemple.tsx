"use client";

import { Globe, Users, CreditCard, Activity } from "lucide-react";
import { Dashcard } from "./dashbaordcard";

export default function DashboardExample() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Dashcard
        title="Total Revenue"
        icon={<CreditCard className="h-4 w-4" />}
        subtitle="$45,231.89"
        thirdtitle="+20.1% from last month"
      />
      <Dashcard
        title="Active Users"
        icon={<Users className="h-4 w-4" />}
        subtitle="2,350"
        thirdtitle="+180 new users"
      />
      <Dashcard
        title="Active Projects"
        icon={<Globe className="h-4 w-4" />}
        subtitle="12"
        thirdtitle="+2 from last month"
      />
      <Dashcard
        title="Conversion Rate"
        icon={<Activity className="h-4 w-4" />}
        subtitle="3.2%"
        thirdtitle="+0.5% from last week"
      />
    </div>
  );
}
