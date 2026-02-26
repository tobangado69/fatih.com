"use client";

import { useState, useEffect } from "react";

export function usePageLoadAnimation(): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return isVisible;
}
