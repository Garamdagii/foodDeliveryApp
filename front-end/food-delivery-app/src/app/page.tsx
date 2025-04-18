"use client";

import { useRouter } from "next/navigation";
import { LogInAccount } from "./(auth)/components/logIn";
import { Footer } from "@/components/footer";
import { FoodCart } from "@/components/foodCart";
import { FoodCategories } from "@/components/foodCategories";

export default function Home() {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col w-screen h-screen gap-5">
      <button onClick={handleOnClick}>Sign in </button>
      <FoodCategories />
      {/* <FoodCart /> */}
    </div>
  );
}
