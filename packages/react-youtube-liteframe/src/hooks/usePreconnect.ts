import { useEffect } from "react";

/**
 * Dynamically preconnects to a URL when the component mounts.
 *
 * @param href - The URL to preconnect to.
 */
export const usePreconnect = (href?: string) => {
  useEffect(() => {
    if (!document || !href) return;

    const existing = document.querySelector(
      `link[rel="preconnect"][href="${href}"]`
    );
    if (existing) return;

    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = href;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [href]);
};
