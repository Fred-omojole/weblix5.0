export const fadeIn = (direction: string, delay: number, duration: number) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,

      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,

      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },

    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
