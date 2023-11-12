"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div>
      <Link
        className={
          pathname === "/dashboard/settings" ? "text-black" : "text-red"
        }
        href="/dashboard/settings"
      >
        Dashboard Settings
      </Link>
      <Link
        className={pathname === "/dashboard" ? "text-black" : "text-red"}
        href="/dashboard"
        scroll={false} // disabling scroll restoration
      >
        Dashboard
      </Link>
      <button
        onClick={(event) => {
          router.push("/dashboard");
        }}
      >
        Dashboard Button Router
      </button>
    </div>
  );
};

export default Navigation;
