"use client";

import { ReactNode } from "react";

interface PageLoadSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  isVisible: boolean;
}

export default function PageLoadSection({
  children,
  className = "",
  delay = 0,
  isVisible,
}: PageLoadSectionProps) {
  return (
    <div
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(2rem)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
