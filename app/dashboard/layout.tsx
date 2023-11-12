import Navigation from "@/components/Navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h3>Dashboard Layout</h3>
      <Navigation />
      {children}
    </>
  );
}
