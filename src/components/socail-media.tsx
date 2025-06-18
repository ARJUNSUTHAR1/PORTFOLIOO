import GithubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";
import XIcon from "@/components/icons/x";
import {Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SocailMedia() {
  return (
    <>
      <aside className="flex py-2 items-center gap-4">
        <Link href={"https://x.com/arjunsuthar_"} target="_blank">
          <XIcon />
        </Link>
        <Link href={"https://github.com/ARJUNSUTHAR1"} target="_blank">
          <GithubIcon />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/arjunsuthar1/"}
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
        <Link href={"mailto:arjunsuthar2112@gmail.com"} target="_blank">
          <Mail />
        </Link>
      </aside>
    </>
  );
}
