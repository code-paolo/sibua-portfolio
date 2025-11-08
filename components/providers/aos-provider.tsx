"use client";

import { useEffect, ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AosProviderProps {
  children: ReactNode;
}

export function AosProvider({ children }: AosProviderProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 50,
      delay: 0,
      // This is crucial - it allows animations to trigger even if elements are already in viewport
      startEvent: "DOMContentLoaded",
      // Disable initial animations being skipped
      disable: false,
      // Animate elements as soon as they're detected
      anchorPlacement: "top-bottom",
      mirror: false,
    });

    // Refresh AOS after a short delay to ensure DOM is ready
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  return <>{children}</>;
}
