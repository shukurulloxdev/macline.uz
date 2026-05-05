import { getMe } from "@/actions/auth-actions";
import { redirect } from "next/navigation";
import SettingsContent from "./_components/settings-content";
import MobilSetting from "./_components/mobil-setting";

async function Page() {
  const data = await getMe();

  if (!data?.user) redirect("/");

  return (
    <div>
      <div className="max-md:hidden">
        <SettingsContent user={data.user} />;
      </div>
      <div className="md:hidden">
        <MobilSetting user={data.user} />
      </div>
    </div>
  );
}

export default Page;
