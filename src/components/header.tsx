"use client";

import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="flex h-16 items-center justify-between gap-4 border-b px-2 md:px-4 w-full bg-background z-50 sticky top-0">
      <h1 className="text-2xl font-bold w-50">Ben Walderman</h1>
      <div>
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
      <div className="flex justify-end w-50">
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
