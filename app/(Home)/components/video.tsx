// import React from "react";

// const Video = () => {
//   return (
//     <div className="relative  overflow-hidden h-[500px]">
//       <video
//         className="bg-cover m-auto w-full h-full right-[-100] bottom-[-100%] top-[-100%] left-[-100%] z-[-100] object-cover absolute"
//         id="ddbd2bac-ac19-1277-1d25-0f1e82a18355-video"
//         loop
//         autoPlay
//         data-object-fit="cover"
//       >
//         <source
//           src="https://utfs.io/f/in80FPlIYTEc7DgntgKDbIh5ayGLd98pJwKeQOAoCRjiSnFW"
//           data-wf-ignore="true"
//         />
//       </video>
//     </div>
//   );
// };

// export default Video;

import React from "react";

const Video = () => {
  return (
    <div className="relative overflow-x-hidden h-44 rounded-3xl bg-center">
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        loop
        autoPlay
        muted
      >
        <source
          src="https://utfs.io/f/in80FPlIYTEc7DgntgKDbIh5ayGLd98pJwKeQOAoCRjiSnFW"
          type="video/mp4" // Adding type for better browser compatibility
        />
      </video>
    </div>
  );
};

export default Video;
