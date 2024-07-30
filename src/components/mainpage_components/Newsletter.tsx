import { FunctionComponent } from "react";

export type DivsubscribeSectionConType = {
  className?: string;
};

const Newsletter: FunctionComponent<DivsubscribeSectionConType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch rounded-xl [background:linear-gradient(96.36deg,_rgba(243,_85,_151,_0.6),_rgba(120,_104,_199,_0.6)_71.92%)] flex flex-row items-start justify-between py-[66px] pr-[91px] pl-[74px] box-border max-w-full shrink-0 gap-[20px] text-left text-13xl text-gray-300 font-inter mq900:pr-[22px] mq900:box-border mq1275:pl-[37px] mq1275:pr-[45px] mq1275:box-border mq1600:flex-wrap ${className}`}
    >
      <div className="w-[475px] flex flex-col items-start justify-start pt-[6.6px] px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[13.1px] max-w-full">
          <h1 className="m-0 relative text-inherit tracking-[-0.64px] leading-[36px] font-semibold font-inherit mq450:text-lgi mq450:leading-[22px] mq900:text-7xl mq900:leading-[29px]">
            Stay inspired for upcoming trips
          </h1>
          <div className="relative text-base leading-[24px] font-poppins text-whitesmoke-200 inline-block max-w-full">
            We’ll share travel tips, incentives and unmissable offers!
          </div>
        </div>
      </div>
      <form className="m-0 w-[411.7px] flex flex-row items-start justify-start gap-[10px] max-w-full mq450:flex-wrap">
  <div className="flex-0 flex flex-col items-start justify-start gap-[15px] min-w-[181px]">
          <input
            className="w-full [border:none] [outline:none] bg-white self-stretch h-[38px] rounded-md overflow-hidden shrink-0 flex flex-row items-start justify-start pt-0 px-5 pb-0 box-border font-poppins text-base text-gray-200 min-w-[167px] align-bottom"
            placeholder="Your name..."
            type="text"
          />
          <input
            className="w-full [border:none] [outline:none] bg-white self-stretch h-[38px] rounded-md overflow-hidden shrink-0 flex flex-row items-start justify-start pt-0 px-5 pb-0 box-border font-poppins text-base text-gray-200 min-w-[167px] align-bottom"
            placeholder="Your email address..."
            type="text"
          />
        </div>
        <div className="w-[123px] flex flex-col items-start justify-start pt-[26.5px] px-0 pb-0 box-border">
          <button className="cursor-pointer [border:none] pt-[7.9px] px-5 pb-[10.1px] bg-[transparent] self-stretch rounded-md [background:linear-gradient(92.37deg,_#f35597,_#7868c7)] flex flex-row items-start justify-start">
            <a className="[text-decoration:none] relative text-base leading-[20px] font-semibold font-inter text-white text-left inline-block min-w-[79px]">
              Subscribe
            </a>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
