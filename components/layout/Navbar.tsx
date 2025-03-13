"use client";

import * as React from "react";
import Link from "next/link";
import { Bell, LogOut, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useUser } from "@/hooks/useUser";
import { useLogoutMutation } from "@/lib/services/user.service";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const user = useUser((state) => state.user);
  const clearUser = useUser((state) => state.clearUser);

  const { mutateAsync: logout } = useLogoutMutation();
  const router = useRouter();
  async function signOut() {
    router.push("/auth/login");

    logout();

    clearUser();
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-8 py-8 flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">HisEvento</span>
        </Link>

        {user ? (
          <div className="flex items-center gap-4">
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <Image
                  width={32}
                  height={32}
                  src={
                    "https://img9.irna.ir/d/r2/2024/08/26/4/171360290.jpg?ts=1724685216150"
                  }
                  alt="Profile"
                  className="h-8 w-8 rounded-full object-cover cursor-pointer"
                />
              </HoverCardTrigger>
              <HoverCardContent align="end" className="w-64">
                <div className="flex items-center gap-4">
                  <Image
                    width={32}
                    height={32}
                    src={
                      "https://img9.irna.ir/d/r2/2024/08/26/4/171360290.jpg?ts=1724685216150"
                    }
                    alt="Profile"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold">{user?.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <nav>
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="/profile"
                        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                      >
                        <User className="h-4 w-4" />
                        View Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/settings"
                        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                      >
                        <Settings className="h-4 w-4" />
                        Settings
                      </Link>
                    </li>
                  </ul>
                </nav>
                <Separator className="my-4" />
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm"
                  size="sm"
                  onClick={signOut}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </Button>
              </HoverCardContent>
            </HoverCard>
          </div>
        ) : (
          <Button asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
        )}
      </div>
    </header>
  );
}
