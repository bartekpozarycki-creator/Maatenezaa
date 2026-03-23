import React from 'react';
import ReactPlayer from 'react-player';

function isYouTubeUrl(url) {
  if (!url || typeof url !== 'string') return false;
  return /youtube\.com|youtu\.be/i.test(url);
}

export default function VideoPlayer({ url, poster, containerClassName = "aspect-video", videoClassName = "" }) {
  const shell = `relative w-full overflow-hidden rounded-xl shadow-lg ${containerClassName}`;

  if (isYouTubeUrl(url)) {
    return (
      <div className={shell}>
        <div className="absolute inset-0">
          <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            controls
            config={{ youtube: { playerVars: { playsinline: 1 } } }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={shell}>
      <video
        src={url}
        poster={poster}
        controls
        playsInline
        className={`w-full h-full object-cover ${videoClassName}`}
      />
    </div>
  );
}
