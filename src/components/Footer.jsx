import React from "react";
import { buttonVariants } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t py-5">
      <div className="flex items-center justify-center gap-2 font-medium">
        Powered by
        <a
          className={`${buttonVariants({ variant: "link" })} !p-0`}
          href="https://json-api.uz"
          target="_blank"
        >
          Json-api.uz
        </a>
      </div>
    </footer>
  );
}
