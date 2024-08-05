import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type DestinationIntroType = {
  className?: string;
  trendingDestinations?: string;
  placesThatTravelersAreAdd?: string;
  divcnSliderArrowsArrowcnS?: string;
  divcnSliderArrowsArrowcnS1?: string;
  /** Style props */
  propGap?: CSSProperties["gap"];
};

const TitleComponentwithButton: FunctionComponent<DestinationIntroType> = ({
  className = "",
  trendingDestinations,
  placesThatTravelersAreAdd,
  divcnSliderArrowsArrowcnS,
  divcnSliderArrowsArrowcnS1,
  propGap,
}) => {
  const destinationIntroStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[13.3px] max-w-full text-left text-13xl text-gray-300 font-inter mq650:pb-3 ${className}`}
      style={destinationIntroStyle}
    >
      <h1 className="m-0 relative text-inherit leading-[39px] font-semibold font-inherit inline-block max-w-full mq900:text-7xl mq900:leading-[31px] mq650:text-4xl">
        {trendingDestinations}
      </h1>
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-lg text-gray-100 font-poppins mq900:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-[2.2px] px-0 pb-0 box-border max-w-full">
          <div className="relative leading-[22px] mq650:text-lg">
            {placesThatTravelersAreAdd}
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <img
            className="h-7 w-7 relative rounded-sm min-h-[28px]"
            alt=""
            src={divcnSliderArrowsArrowcnS}
          />
          <img
            className="h-7 w-7 relative rounded-sm min-h-[28px]"
            alt=""
            src={divcnSliderArrowsArrowcnS1}
          />
        </div>
      </div>
    </div>
  );
};

export default TitleComponentwithButton;
