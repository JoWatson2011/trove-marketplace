import { useState, useEffect } from "react";

export function useDisplaySize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

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
