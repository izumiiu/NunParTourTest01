
import AuthSection from "@/components/AuthSection";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <hr />
      <h3>Login to your account</h3>
      <AuthSection/>
      <hr />
      <div>
        <h2>didnt have an account?  ----  <Link href="/register">Register here</Link></h2> 
      </div>
    </div>
  );
}
