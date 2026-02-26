"use client";

import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  overlayContent?: ReactNode;
  onClick?: () => void;
}

export default function AnimatedCard({
  children,
  className = "",
  overlayContent,
  onClick,
}: AnimatedCardProps) {
  return (
    <div
      className={`group relative overflow-hidden cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
      
      {overlayContent && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          {overlayContent}
        </div>
      )}
    </div>
  );
}
