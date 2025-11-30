"use client";

import Youtube from "react-youtube-liteframe";
import "react-youtube-liteframe/dist/index.css";

export default function Video() {
  return (
    <Youtube
      videoID="g1gix7znjS4"
      className="overflow-clip rounded-lg"
      videoTitle="TRUTH OR DRINK | Alan vs Chloe"
    />
  );
}
