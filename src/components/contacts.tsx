import React from "react";
import SocailMedia from "./socail-media";
import { logo } from "@/app/constants/image";

export default function Contacts() {
  return (
    <>
      <div
        id="contact"
        className="border-x-2 border-t-2 relative text-center px-8 overflow-hidden pt-10 pb-12 flex flex-col items-center gap-2 justify-center"
      >
        <div>
          <SocailMedia />
        </div>
        <p className="text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
        <p className="text-sm text-foreground/60">
          Designed and Developed by Arjun Suthar
        </p>
      </div>
    </>
  );
}
