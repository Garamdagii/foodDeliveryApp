import { AuthImage } from "@/components/authImage1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center items-center w-screen h-screen gap-[48px]">
      {children}
      <AuthImage />
    </div>
  );
}
