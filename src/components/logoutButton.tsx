"use client";

import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/")} className="cursor-pointer">
      Logout
    </button>
  );
};

export default LogoutButton;
