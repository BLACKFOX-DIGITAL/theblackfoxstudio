"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { sairaCondensedClass } from "@/utils/font";
import { cn } from "@/lib";

function labelFromHref(href) {
  const parts = href.replace(/^\//, "").split("/").filter(Boolean);
  const segment = parts[0] || "BLACKFOX";

  // For nested paths like /services/background-removal-service, use the slug
  if (parts.length > 1) {
    return parts[1].replace(/-service$/, "").replace(/-/g, " ").toUpperCase();
  }

  const map = {
    services: "SERVICES",
    portfolio: "PORTFOLIO",
    pricing: "PRICING",
    about: "ABOUT",
    blog: "BLOG",
    contact: "CONTACT",
    "free-trial": "FREE TRIAL",
    "get-quote": "GET QUOTE",
  };
  return map[segment] || segment.replace(/-/g, " ").toUpperCase();
}

// phase: "idle" | "in" | "out"
const SLIDE_MS = 700;

export default function PageCurtain() {
  const [phase, setPhase] = useState("idle");
  const [word, setWord] = useState("BLACKFOX");
  const router = useRouter();
  const busyRef = useRef(false);
  const pathnameRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (busyRef.current) return;

      const a = e.target.closest("a[href]");
      if (!a) return;

      const href = a.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("http") ||
        href.startsWith("mailto") ||
        href.startsWith("tel")
      ) return;

      // skip if same page
      if (href === window.location.pathname) return;

      e.preventDefault();
      e.stopPropagation();

      busyRef.current = true;
      pathnameRef.current = href;
      setWord(a.getAttribute("data-curtain") || labelFromHref(href));
      window.dispatchEvent(new CustomEvent("page-curtain-start"));

      // Phase 1: curtain slides up from bottom to cover screen
      setPhase("in");

      setTimeout(() => {
        // Navigate once curtain covers screen
        router.push(href);

        // Phase 2: curtain slides up off the top
        setTimeout(() => {
          setPhase("out");

          // Reset after exit animation
          setTimeout(() => {
            setPhase("idle");
            busyRef.current = false;
          }, SLIDE_MS);
        }, 200);
      }, SLIDE_MS);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  const transform =
    phase === "idle" ? "translateY(100%)" :
    phase === "in"   ? "translateY(0%)" :
                       "translateY(-100%)";

  return (
    <div
      className={cn(
        "fixed inset-0 bg-[#EE3A39] text-white flex items-center justify-center pointer-events-none",
        sairaCondensedClass
      )}
      style={{
        zIndex: 8000,
        transform,
        transition: phase === "idle" ? "none" : `transform ${SLIDE_MS}ms cubic-bezier(0.7,0,0.3,1)`,
      }}
    >
      <span
        style={{
          fontSize: "clamp(48px, 11vw, 180px)",
          fontWeight: 900,
          letterSpacing: "-0.05em",
          textTransform: "uppercase",
          lineHeight: 1,
        }}
      >
        {word}
      </span>
    </div>
  );
}
