import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type DivcnHpNexttripSliderType = {
  className?: string;
  imgcnImageDefault?: string;
  hotels?: string;
  properties?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
};

const CategoryHotelCard: FunctionComponent<DivcnHpNexttripSliderType> = ({
  className = "",
  imgcnImageDefault,
  hotels,
  properties,
  propGap,
}) => {
  const divcnHpNexttripSliderStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`h-[290px] w-[290px]  rounded-xl box-border overflow-hidden  flex flex-col items-start justify-start pt-0 px-0 pb-35px min-w-[237px] max-w-full text-left text-4xl text-black font-poppins  border-solid border-slategray-200  ${className}`}
      
      style={divcnHpNexttripSliderStyle}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={imgcnImageDefault}
      />
      <div className="self-stretch flex flex-col items-start justify-start pt-[18px] px-5 pb-[5px] gap-[10.5px] z-[1] ">
        <h3 className="m-0 relative text-inherit leading-[28px] lowercase font-bold font-inherit inline-block min-w-[74px] mq450:text-lg mq450:leading-[22px]">
          {hotels}
        </h3>
        <div className="relative text-base tracking-[0.16px] leading-[24px]">
          {properties}
        </div>
      </div>
    </div>
  );
};

export default CategoryHotelCard;
