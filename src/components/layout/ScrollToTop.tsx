import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, don't automatically scroll to top
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop; 