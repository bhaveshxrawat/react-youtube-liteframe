import { useEffect } from "react";

/**
 * Dynamically preconnects to a URL when the component mounts.
 *
 * @param hrefs - The array of URLs to preconnect to.
 */
export const usePreconnect = (hrefs?: string[]) => {
  if (!document || !hrefs || hrefs.length === 0) return;
  useEffect(() => {
    for (const link of hrefs) {
      const existing = document.querySelector(
        `link[rel="preconnect"][href="${link}"]`
      );
      if (existing) return;
      const linkMarkup = document.createElement("link");
      linkMarkup.rel = "preconnect";
      linkMarkup.href = link;
      linkMarkup.crossOrigin = "anonymous";
      document.head.appendChild(linkMarkup);
    }
  }, [hrefs]);
};
