import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

const FacebookPixel = () => {
  const location = useLocation();

  useEffect(() => {
    // Initial PageView is already fired in index.html, 
    // but on subsequent route changes we need to fire it manually
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [location]);

  return null;
};

export default FacebookPixel;
