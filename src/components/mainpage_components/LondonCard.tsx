import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type DivcnCardcnCard3Type = {
  className?: string;
  imgcnImageDefault?: string;
  london?: string;
  prop?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const LondonCard: FunctionComponent<DivcnCardcnCard3Type> = ({
  className = "",
  imgcnImageDefault,
  london,
  prop,
  propWidth,
  propAlignSelf,
}) => {
  const divcnCardcnCard4Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div
      className={`w-[280px] shadow-[0px_2px_2px_rgba(87,_75,_144,_0.15)] rounded-2xl bg-darkgray-200 overflow-hidden shrink-0 flex flex-row items-start justify-start text-left text-4xl text-white font-poppins ${className}`}
      style={divcnCardcnCard4Style}
    >
      <div className="flex-1 rounded-2xl overflow-hidden flex flex-col items-start justify-end pt-[316.2px] px-5 pb-[11.7px] relative gap-[0.1px] mq450:pt-[206px] mq450:pb-5 mq450:box-border">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-2xl max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src={imgcnImageDefault}
        />
        <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit inline-block min-w-[87px] z-[1] mq450:text-lg mq450:leading-[22px]">
          {london}
        </h3>
        <div className="flex flex-row items-start justify-start text-base">
          <div className="flex flex-col items-start justify-start py-0 pr-1 pl-0">
            <div className="relative tracking-[0.16px] leading-[19px] font-medium inline-block min-w-[42px] z-[1]">{`From `}</div>
          </div>
          <div className="relative tracking-[0.16px] leading-[19px] font-medium inline-block min-w-[27.9px] whitespace-nowrap z-[1]">
            {prop} 
          </div>
          <div className="relative tracking-[0.16px] leading-[19px] font-medium inline-block min-w-[79px] z-[1]">
            {`  per week`}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LondonCard;
