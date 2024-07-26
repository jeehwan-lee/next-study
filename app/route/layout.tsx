import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "레벨업 Next.js 라우팅",
};

async function layout({ children }: { children: React.ReactNode }) {
  return <div className="space-y-9">{children}</div>;
}

export default layout;
