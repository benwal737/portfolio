"use client";

import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  return (
    <header className="px-5 md:px-20 flex h-16 items-center justify-between gap-4 border-b w-full bg-background z-50 sticky top-0">
      <Link href="/">
        <h1 className="text-lg md:text-2xl font-bold w-60">
          Ben Walderman<span className="text-primary ml-1">.</span>
        </h1>
      </Link>
      <div className="hidden md:flex">
        <Button
          variant="ghost"
          onClick={() => {
            router.push("/");
          }}
        >
          Home
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            router.push("/projects");
          }}
        >
          Projects
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            router.push("/contact");
          }}
        >
          Contact
        </Button>
      </div>
      <div className="flex justify-end w-60">
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
