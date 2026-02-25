"use client";

import { useEffect } from "react";

export default function Spotlight() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = document.getElementById("spotlight");
      if (el) {
        el.style.setProperty("--x", e.clientX + "px");
        el.style.setProperty("--y", e.clientY + "px");
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="spotlight" id="spotlight" />
      <div className="ambient-glow" />
    </>
  );
}
