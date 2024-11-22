import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const VideoSkeleton = () => {
  return (
    <div className="relative overflow-x-hidden h-[95vh] rounded-3xl bg-center">
      <Skeleton className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default VideoSkeleton;
