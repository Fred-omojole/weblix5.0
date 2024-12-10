import { PiRocketLaunchThin } from "react-icons/pi";

interface Props {
  //  button:
  //   icon?: JSX.Element;
  title: string;
  category: string;
  target: string;
  borderColor: string;
  borderColor2: string;
  bgColor: string;
  bgColor2: string;
  word: string;
  textColor: string;
  textColor2: string;
  price: string;
  button: string;
  color: string;
  className: string;
  categoryColor: string;
  categoryBg: string;
  priceColor: string;
  titleColor?: string;
  features: string[];
  featureColor: string;
}

function PricingCards({
  //   icon,
  className,
  button = "Get Started",
  titleColor,
  title,
  category,
  target,
  price,
  color,
  textColor,
  textColor2,
  borderColor,
  borderColor2,
  bgColor,
  bgColor2,
  word,
  categoryBg,
  categoryColor,
  priceColor,
  features,
  featureColor,
}: Props) {
  const half = Math.ceil(features.length / 2);
  const firstHalf = features.slice(0, half);
  const secondHalf = features.slice(half);

  return (
    <div
      className={`${bgColor} ${borderColor} flex flex-col flex-nowrap p-3 gap-0 border-solid border-[1px] rounded-[32px]`}
    >
      <div
        className={`${bgColor2} ${borderColor2}  flex flex-col flex-nowrap pt-[28px] pb-[32px] pr-[28px] pl-[28px] gap-[56px] border-solid border-[1px] rounded-[20px] `}
      >
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-start items-center gap-3">
            <h4
              className={` ${titleColor}  my-0 text-[24px] leading-[112%] font-medium tracking-[-0.72px]`}
            >
              {title}
            </h4>
            <div
              className={` ${categoryBg} py-2 px-[14px] justify-center items-center rounded-[100px] text-[14px] leading-[132%] text-center tracking-[-0.14px]`}
            >
              <div className={`${categoryColor}`}>{category}</div>
            </div>
          </div>
          <h3
            className={` ${textColor} max-w-[344px] my-0 text-[32px] leading-[116%] font-medium tracking-[-1.28px]`}
          >
            <span className={`${textColor2}`}>{word}</span>
            {target}
          </h3>
        </div>
        <div className="flex flex-col flex-nowrap items-start justify-start gap-3 ">
          <div
            className={` ${priceColor}  flex  items-end justify-start gap-0`}
          >
            <div className="pb-[5px] ">$</div>
            <h3
              className={`my-0 text-[32px] leading-[116%] font-medium tracking-[-1.28px]`}
            >
              {price}
            </h3>
            <div className="pb-[5px]">
              <div>/mo</div>
            </div>
          </div>
          <a
            title="button"
            className={`hover:px-[48px] transition-all ease-in-out duration-200    cursor-pointer  ${className}`}
          >
            <PiRocketLaunchThin className="w-5 h-5 max-w-[100%] align-middle inline-block " />
            <div className={`${color}`}> {button}</div>
          </a>
        </div>
      </div>
      <div className="flex p-[28px] gap-[24px]">
        <div className="flex flex-col flex-1 gap-[14px]">
          {firstHalf.map((feature, index) => (
            <div
              key={index}
              className={`${featureColor} flex justify-start items-start gap-[8px] text-white/60 text-[14px] leading-[132%] tracking-[-0.14%]`}
            >
              {feature}
            </div>
          ))}
        </div>
        <div className="flex flex-col flex-1 gap-[14px]">
          {secondHalf.map((feature, index) => (
            <div
              key={index}
              className={` ${featureColor}   flex justify-start items-start gap-[8px]  text-white/60 text-[14px] leading-[132%] tracking-[-0.14%]`}
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingCards;
