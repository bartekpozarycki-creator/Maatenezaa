import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

function isYouTubeUrl(url) {
  if (!url || typeof url !== "string") return false;
  return /youtube\.com|youtu\.be/i.test(url);
}

export default function VideoPlayer({
  url,
  poster,
  containerClassName = "aspect-video",
  videoClassName = "",
  autoPlay = false,
  controls = true,
  interactive = true,
}) {
  const shell = `relative w-full overflow-hidden rounded-xl shadow-lg ${containerClassName}`;
  const videoRef = useRef(null);

  useEffect(() => {
    if (!autoPlay || !url || isYouTubeUrl(url)) return;
    const el = videoRef.current;
    if (!el) return;
    const tryPlay = () => {
      el.play().catch(() => {});
    };
    if (el.readyState >= 2) tryPlay();
    else el.addEventListener("canplay", tryPlay, { once: true });
    return () => el.removeEventListener("canplay", tryPlay);
  }, [autoPlay, url]);

  if (isYouTubeUrl(url)) {
    return (
      <div className={shell}>
        <div className={`absolute inset-0 ${interactive ? "" : "pointer-events-none"}`}>
          <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            controls={controls}
            playing={autoPlay}
            config={{ youtube: { playerVars: { playsinline: 1, autoplay: autoPlay ? 1 : 0 } } }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={shell}>
      <video
        ref={videoRef}
        src={url}
        poster={poster}
        controls={controls}
        playsInline
        autoPlay={autoPlay}
        className={`w-full h-full object-cover ${interactive ? "" : "pointer-events-none"} ${videoClassName}`}
      />
    </div>
  );
}
