import { FunctionComponent } from "react";

export type DivcnCardcnCardType = {
  className?: string;
  imgcnImageDefault?: string;
  newDelhi?: string;
  properties?: string;
};

const StaycationCard: FunctionComponent<DivcnCardcnCardType> = ({
  className = "",
  imgcnImageDefault,
  newDelhi,
  properties,
}) => {
  return (
    <div
      className={`self-stretch w-[280px] shadow-[0px_2px_2px_rgba(87,_75,_144,_0.15)] rounded-2xl bg-darkgray-200 overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[18px] px-[18px] pb-[18.5px] box-border relative gap-[1.8px] text-left text-4xl text-white font-poppins ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-2xl max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={imgcnImageDefault}
      />
      <h3 className="m-0 relative text-inherit leading-[28px] uppercase font-bold font-inherit inline-block min-w-[123px] z-[1] mq450:text-lg mq450:leading-[22px]">
        {newDelhi}
      </h3>
      <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-[1.7px] box-border z-[1] text-base">
        <div className="mt-[-1.7px] relative tracking-[0.16px] leading-[19px] font-medium">
          {properties}
        </div>
      </div>
    </div>
  );
};

export default StaycationCard;
