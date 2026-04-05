import { ChildProps } from "@/types";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { getMe } from "@/actions/auth-actions";
import AuthLoader from "@/components/shared/user-fetch";

async function Layout({ children }: ChildProps) {
  const data = await getMe();
  const user = data?.user ?? null;

  return (
    <>
      <AuthLoader user={user} />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
