import { ChildProps } from "@/types";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { getMe } from "@/actions/auth-actions";
import AuthLoader from "@/components/shared/user-fetch";
import { getCategories } from "@/actions/user-actions";
import NavbarBottom from "./_components/navbar-bottom";

async function Layout({ children }: ChildProps) {
  const data = await getMe();
  const user = data?.user ?? null;
  const allCategories = await getCategories();
  const categories = allCategories.data?.categories || [];

  return (
    <>
      <AuthLoader user={user} />
      {/* <Navbar katalog={categories} /> */}
      <div>{children}</div>
      <Footer />
      <NavbarBottom />
    </>
  );
}

export default Layout;
