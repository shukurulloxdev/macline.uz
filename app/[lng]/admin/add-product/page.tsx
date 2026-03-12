import { getCategories } from "@/actions/user-actions";
import InputInformation from "./_components/input-information";

async function Page() {
  const res = await getCategories();
  return (
    <div>
      <InputInformation activeCategories={res.data?.categories || []} />
    </div>
  );
}

export default Page;
