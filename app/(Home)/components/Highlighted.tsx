import React from "react";

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
}
// USING A TYPESCRIPT TYPE THAT CREATES AN OBJECT TYPE WHERE THE KEYS ARE OF TYPE K AND THE VALUES ARE OF TYPE T Record<K, T>
const colorSchemes: Record<string, ColorScheme> = {
  green: {
    border: "border-l-green-500",
    gradientFrom: "from-custom-green-32",
    gradientTo: "to-custom-green-4",
  },

  blue: {
    border: "border-l-green-500",
    gradientFrom: "from-custom-green-32",
    gradientTo: "to-custom-green-4",
  },

  purple: {
    border: "border-l-green-500",
    gradientFrom: "from-custom-green-32",
    gradientTo: "to-custom-green-4",
  },
};

const HighlightedTitle = ({
  text,
  highlightedText,
  className,
  suffix = "Web Experience",
  colorScheme = "green",
  customColors,
}: HighlightedProps) => {
  const colors = customColors || colorSchemes[colorScheme];
  return (
    <h1 className={className}>
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
    </h1>
  );
};

export default HighlightedTitle;
