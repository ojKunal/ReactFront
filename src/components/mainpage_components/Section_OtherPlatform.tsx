import { FunctionComponent } from "react";

export type DivcnHpMediaWrapperType = {
  className?: string;
};

const Section_OtherPlatform: FunctionComponent<DivcnHpMediaWrapperType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-between pt-4 px-0 pb-[5px] gap-[20px] border-t-[0.6px] border-solid border-silver-100 border-b-[0.6px] mq1600:justify-center ${className}`}
    >
      <div className="h-[85.2px] w-[290.5px] flex flex-col items-start justify-start pt-[34.5px] px-0 pb-0 box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/img-6@2x.png"
        />
      </div>
      <div className="h-[88.2px] w-[229.7px] flex flex-col items-start justify-start pt-[31.5px] px-0 pb-0 box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/img-7@2x.png"
        />
      </div>
      <div className="w-[188.1px] flex flex-col items-start justify-start pt-[40.2px] px-0 pb-0 box-border">
        <img
          className="self-stretch h-[39.3px] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/img-8@2x.png"
        />
      </div>
      <img
        className="h-[119.8px] w-[232.1px] relative overflow-hidden shrink-0 object-contain"
        loading="lazy"
        alt=""
        src="/img-9@2x.png"
      />
      <div className="h-[84.5px] w-[109.5px] flex flex-col items-start justify-start pt-[35.2px] px-0 pb-0 box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/img-10@2x.png"
        />
      </div>
      <div className="h-[83.8px] w-[91.7px] flex flex-col items-start justify-start pt-[16.7px] px-0 pb-0 box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/img-11@2x.png"
        />
      </div>
    </div>
  );
};

export default Section_OtherPlatform;
