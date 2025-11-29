import React from 'react';
import ReactPlayer from 'react-player';

/**
 * Responsive 16:9 video player based on react-player.
 * Props:
 *  - url (string) – source (YouTube, Vimeo, mp4, etc.)
 *  - light (string | boolean) – optional thumbnail or true for auto-thumbnail
 *  - ...rest – forward to ReactPlayer
 */
export default function VideoPlayer({ url, light = false, ...rest }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg relative">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls
        playsinline
        light={light}
        {...rest}
      />
    </div>
  );
}
