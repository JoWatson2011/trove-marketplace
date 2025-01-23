"use client";
import { useState, useEffect } from "react";

export function useDisplaySize(): [number | null, number | null] {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [windowHeight, setWindowHeight] = useState<number | null>(null);

  useEffect(() => {
    function handleWidth() {
      setWindowWidth(window.innerWidth);
    }
    function handleHeight() {
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleWidth);
    window.addEventListener("resize", handleHeight);

    return () => {
      window.removeEventListener("resize", handleWidth);
      window.removeEventListener("resize", handleHeight);
    };
  });

  return [windowWidth, windowHeight];
}
