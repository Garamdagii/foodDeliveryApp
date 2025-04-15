"use client";

import { useRouter } from "next/navigation";
import { LogInAccount } from "./(auth)/components/logIn";

export default function Home() {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/");
  };

  return (
    <div>
      <button onClick={handleOnClick}>Sign in </button>
      <LogInAccount
        title="Create your account"
        titleComment="Sign up to explore your favorite dishes."
        placeholder="Enter your email address"
        account="Already have an account?"
        entry="Log in "
      />
    </div>
  );
}
