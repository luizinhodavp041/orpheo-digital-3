"use client";

import { useEffect, useState } from "react";

export default function VideoBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <video
      className="w-full h-full object-cover"
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
    >
      <source src="/videos/video-1.mp4" type="video/mp4" />
    </video>
  );
}
