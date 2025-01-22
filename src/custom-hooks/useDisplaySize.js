
import { useState, useEffect } from "react";

export async function useDisplaySize() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

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
      window.removeEventListener(window.visualViewport.width, handleWidth);
      window.removeEventListener(window.visualViewport.height, handleHeight);
    };
  });

  return [windowWidth, windowHeight];
}
