import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent2Type = {
  className?: string;
  divcnHpValuesValueImg?: string;
  globalSearch?: string;
  anAdvancedAlgorithmDelive?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
};

const IconTitleDescriptionCard: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  divcnHpValuesValueImg,
  globalSearch,
  anAdvancedAlgorithmDelive,
  propWidth,
  propPadding,
  propHeight,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      height: propHeight,
    };
  }, [propWidth, propPadding, propHeight]);

  return (
    <div
      className={`w-[285.7px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border gap-[22.7px] text-left text-lg text-hotpink font-inter ${className}`}
      style={frameDiv1Style}
    >
      <div className="w-[265.6px] h-[75px] flex flex-row items-start justify-center py-0 px-5 box-border">
        <div className="h-[75px] w-[75px] relative rounded-11xl shrink-0 flex items-center justify-center">
          <img
            className="h-full w-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[8px] [transform:scale(1.347)]"
            loading="lazy"
            alt=""
            src={divcnHpValuesValueImg}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[12.4px]">
        <div className="flex flex-row items-start justify-start py-0 px-[69px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="relative leading-[22px] font-semibold inline-block min-w-[121px]">
            {globalSearch}
          </div>
        </div>
        <div className="self-stretch relative text-sm leading-[21px] font-poppins text-gray-100 text-center">
          {anAdvancedAlgorithmDelive}
        </div>
      </div>
    </div>
  );
};

export default IconTitleDescriptionCard;
