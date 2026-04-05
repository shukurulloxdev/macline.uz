import { getCategory } from "@/actions/admin-actions";
import CategoryInfo from "./_components/category-info";

interface Props {
  params: { slug: string };
}

async function Page({ params }: Props) {
  const res = await getCategory({ slug: params.slug });
  const category = res?.data?.category;

  if (!category) return null;

  return (
    <div>
      <CategoryInfo category={category} />
    </div>
  );
}

export default Page;
