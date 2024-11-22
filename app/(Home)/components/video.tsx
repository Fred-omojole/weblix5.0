import React, { useEffect } from "react";
import VideoSkeleton from "../VideoSkeleton";
import { useState } from "react";
const Video = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <VideoSkeleton />
      ) : (
        <div className="relative overflow-x-hidden h-[95vh]  rounded-3xl bg-center">
          <video
            className="absolute inset-0 w-full h-full object-cover -z-10"
            loop
            autoPlay
            muted
            onLoadedData={() => setIsLoading(false)}
          >
            <source
              src="https://utfs.io/f/in80FPlIYTEc7DgntgKDbIh5ayGLd98pJwKeQOAoCRjiSnFW"
              type="video/mp4"
            />
          </video>
        </div>
      )}
    </>
  );
};

export default Video;
