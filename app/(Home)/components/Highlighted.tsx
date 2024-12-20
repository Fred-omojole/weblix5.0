"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variant";

interface ColorScheme {
  border: string;
  gradientTo: string;
  gradientFrom: string;
}

interface HighlightedProps {
  text: string;
  highlightedText: string;
  className?: string;
  suffix?: string;
  colorScheme?: "green" | "blue" | "purple" | "custom";
  customColors?: ColorScheme;
  isAnimated?: boolean;
}
// USING A TYPESCRIPT TYPE THAT CREATES AN OBJECT TYPE WHERE THE KEYS ARE OF TYPE K AND THE VALUES ARE OF TYPE T Record<K, T>
const colorSchemes: Record<string, ColorScheme> = {
  green: {
    border: "border-l-green-500",
    gradientFrom: "from-custom-green-32",
    gradientTo: "to-custom-green-4",
  },

  blue: {
    border: "border-l-blue-500",
    gradientFrom: "from-custom-blue-32",
    gradientTo: "to-custom-blue-4",
  },

  purple: {
    border: "border-l-purple-500",
    gradientFrom: "from-custom-purple-32",
    gradientTo: "to-custom-purple-4",
  },
};

const HighlightedTitle = ({
  text,
  highlightedText,
  className,
  suffix = "Web Experience",
  colorScheme = "green",
  customColors,
  isAnimated = true,
}: HighlightedProps) => {
  const colors = customColors || colorSchemes[colorScheme];
  const HeadingComponent = isAnimated ? motion.h1 : "h1";
  return (
    <HeadingComponent
      className={className}
      {...(isAnimated && {
        initial: "hidden",
        variants: fadeIn("up", 0.01, 0.4),
        animate: "show",
        viewport: { once: true, amount: 0.2 },
      })}
    >
      {text}{" "}
      <span
        className={`border-l-4 border-solid ${colors.border} relative inline-block `}
        aria-label="Highlighted-text"
      >
        <span
          className={`absolute inset-0  bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo}`}
        />
        <span className="relative">{highlightedText}</span>
      </span>
      {suffix && `${suffix}`}
    </HeadingComponent>
  );
};

export default HighlightedTitle;
