"use client";

import { useRouter } from "next/navigation";
import { LogInAccount } from "../components/logIn";

export default function Home() {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/login");
  };

  const handleOnClick1 = () => {
    router.push("/check");
  };

  return (
    <div>
      <LogInAccount
        title="Create your account"
        titleComment="Sign up to explore your favorite dishes."
        placeholder="Enter your email address"
        account="Already have an account?"
        entry="Log in"
        onClick={handleOnClick}
        onClick1={handleOnClick1}
      />
    </div>
  );
}
