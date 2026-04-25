"use client";
import { useRef } from "react";
import Link from "next/link";
import useMagnetic from "@/hooks/useMagnetic";

export default function MagneticCTA({ href, className, children, dataCursor = "start" }) {
  const ref = useRef(null);
  useMagnetic(ref);
  return (
    <Link
      href={href}
      ref={ref}
      className={className}
      data-cursor={dataCursor}
      style={{ willChange: "transform", transition: "transform 0.25s cubic-bezier(0.3,0.9,0.3,1), box-shadow 0.3s, background 0.3s" }}
    >
      {children}
    </Link>
  );
}
