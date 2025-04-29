import { useEffect } from "react";

/**
 * Dynamically preconnects to a URL when the component mounts.
 *
 * @param url - The URL to preconnect to.
 * @param crossorigin - Whether to add `crossorigin="anonymous"`.
 */
export const usePreconnect = (url?: string, crossorigin = false) => {
  useEffect(() => {
    if (!url) return;
    document.head.insertAdjacentHTML(
      "beforeend",
      `<link rel="preconnect" href="${url}" ${
        crossorigin ? 'crossorigin="anonymous"' : ""
      } />`
    );
  }, [url, crossorigin]);
};
