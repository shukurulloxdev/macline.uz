import { ChildProps } from "@/types";
import React from "react";
import UserSidebar from "./_components/user-sidebar";
import { getMe } from "@/actions/auth-actions";
import { redirect } from "next/navigation";

async function Layout({ children }: ChildProps) {
  const data = await getMe();
  if (!data?.user) redirect("/");
  return (
    <div className="mx-auto max-w-7xl py-6">
      <div className="flex items-start gap-4">
        <aside className="sticky top-36 w-80">
          <UserSidebar user={data?.user || null} />
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
