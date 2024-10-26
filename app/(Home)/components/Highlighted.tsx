import React from "react";

interface HighlightedProps {
  text: string;
  highlightedText: string;
  className: string;
}

const HighlightedTitle = ({
  text,
  highlightedText,
  className = " ",
}: HighlightedProps) => {
  return (
    <h1 className={className}>
      {text}{" "}
      <span className="relative inline-block">
        <span className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-transparent " />
        <span className="relative">{highlightedText}</span>
      </span>
      {" Web Experiences"}
    </h1>
  );
};

export default HighlightedTitle;
