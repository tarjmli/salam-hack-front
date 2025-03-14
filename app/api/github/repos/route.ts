import { NextResponse } from "next/server";

export async function GET() {
  const repos = [
    { id: "1", name: "react-app", isPrivate: false, updatedAt: "8h ago" },
    { id: "2", name: "next-dashboard", isPrivate: true, updatedAt: "13h ago" },
    {
      id: "3",
      name: "e-commerce-site",
      isPrivate: false,
      updatedAt: "17h ago",
    },
    {
      id: "4",
      name: "portfolio-website",
      isPrivate: false,
      updatedAt: "2d ago",
    },
    { id: "5", name: "blog-platform", isPrivate: true, updatedAt: "Mar 8" },
  ];

  return NextResponse.json({ data: repos });
}
