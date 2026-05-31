import { useState, useEffect } from "react";

const mediaSources = ["/img/avatar.mp4", "/img/avatar.jpg"];

export default function Avatar() {
  const [mediaUrl, setMediaUrl] = useState("");

  useEffect(() => {
    const randomMedia =
      mediaSources[Math.floor(Math.random() * mediaSources.length)];
    setMediaUrl(randomMedia);
  }, []);

  if (!mediaUrl) return null;

  const isVideo = /\.(mp4|webm)$/i.test(mediaUrl);

  return (
    <div className="avatar-container">
      {isVideo ? (
        <video
          className="avatar-media"
          src={mediaUrl}
          muted
          loop
          playsInline
          autoPlay
        />
      ) : (
        <img className="avatar-media" src={mediaUrl} alt="Аватар" />
      )}
    </div>
  );
}
