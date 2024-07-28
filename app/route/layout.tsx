import { TabNavItem } from "@/ui/tab-nav-item";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "레벨업 Next.js 라우팅",
};

async function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabNavItem href="/">Back</TabNavItem>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default layout;
