"use client";

import { useRouter } from "next/navigation";
import { LogInAccount } from "./(auth)/components/logIn";
import { Footer } from "@/components/footer";

export default function Home() {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/");
  };

  return (
    <div>
      <button onClick={handleOnClick}>Sign in </button>
      <Footer />
    </div>
  );
}
