"use client";
import dynamic from "next/dynamic";

const IntroLoader = dynamic(() => import("./IntroLoader"), { ssr: false });
const PenCursor = dynamic(() => import("./PenCursor"), { ssr: false });
const PageCurtain = dynamic(() => import("./PageCurtain"), { ssr: false });

export default function AnimationLayer() {
  return (
    <>
      <IntroLoader />
      <PenCursor />
      <PageCurtain />
    </>
  );
}
