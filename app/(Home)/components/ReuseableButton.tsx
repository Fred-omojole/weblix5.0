import React from "react";
import Image from "next/image";

interface ButtonProps {
  text: string;
  className: string;
  icon: boolean;
}

const ReuseableButton = ({
  text,
  className = "",
  icon = false,
}: ButtonProps) => {
  const Icon = () => (
    <Image
      className="text-white"
      src="/phonesvg.svg"
      alt="icon"
      width={20}
      height={20}
    />
  );

  return (
    <button
      title="button"
      className={` hover:px-[48px] transition-[padding] items-center  justify-center text-center cursor-pointer rounded-full ${className}`}
    >
      {icon && <Icon />}
      {text}
    </button>
  );
};

export default ReuseableButton;
