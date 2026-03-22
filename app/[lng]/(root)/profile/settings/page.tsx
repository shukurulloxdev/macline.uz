import { getMe } from "@/actions/auth-actions";
import { redirect } from "next/navigation";
import SettingsContent from "./_components/settings-content";

async function Page() {
  const data = await getMe();

  if (!data?.user) redirect("/");

  return <SettingsContent user={data.user} />;
}

export default Page;
