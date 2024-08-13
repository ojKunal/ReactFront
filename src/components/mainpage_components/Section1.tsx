import { FunctionComponent } from "react";
import NavBar from "../NavBar";

export type FrameComponent5Type = {
  className?: string;
};

const Section1: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[33.8px] box-border max-w-full shrink-0 text-left text-25xl text-whitesmoke-100 font-poppins overflow-x-hidden mq650:justify-center mq650:pt-2 mq650:bg-gray-300 ${className}`}
    >
      <div className="h-[900px] flex-1 bg-gray-300 flex flex-col items-start justify-start pt-[324.7px] px-0 pb-4 box-border relative gap-[9.2px] max-w-full mq450:box-border mq900:pt-[58px] mq900:box-border mq1275:pt-[89px] mq1275:pb-5 mq1275:box-border mq650:justify-center mq650:pt-0">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover hide-on-mobile"
          alt=""
          src="/mainpage_icon/divcn--hp--hero--img@2x.png"
        />
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover mobile-only"
          alt=""
          src="/mainpage_icon/divcn--hp--hero--img-mobile.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0">
          <h1 className="m-0 w-[873px] relative text-inherit leading-[52.8px] font-bold font-inherit inline-block [text-shadow:0px_1px_7px_rgba(0,_0,_0,_0.16)] max-w-full z-[1] text-left mq450:text-7xl mq450:leading-[32px] mq650:text-center">
            Find places to stay near your preferred
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[13.1px] box-border max-w-full shrink-0">
          <div className="h-[52.8px] mq650:h-[auto] mq650:pb-0 flex-1 overflow-hidden flex flex-row items-start justify-center pt-0 px-5 pb-[4.2px] box-border max-w-full z-[1]">
            <h1 className="mt-[-4.4px] m-0 relative text-inherit leading-[53px] font-bold font-inherit [text-shadow:0px_1px_7px_rgba(0,_0,_0,_0.16)] mq450:text-7xl mq450:leading-[32px] mq900:text-16xl mq900:leading-[42px] mq650:text-gradient ">{`interests & activities`}</h1>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[15.7px] shrink-0 text-base text-darkslategray hide-on-mobile">
          <div className="relative leading-[20px] font-medium z-[1]">{`Browse, Book & Stay in millions of listings, across more than 180 countries`}</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[5px] shrink-0 text-base text-white mobile-only">
          <div className="relative leading-[20px] font-medium z-[1]">
            Browse, Book & Stay in over 180 countries
          </div>
        </div>
        {/* search bar starts here*/}
        <div className="w-[100%] flex justify-center mt-6 relative z-[3000px]">
          {/* <div className="w-[60%] mq650:w-[90%] relative rounded-[37px] bg-white flex flex-row items-start justify-center pt-3 pb-0 pr-0 pl-[25px] mq650:py-[12px] mq650:pl-1 box-border gap-[10px] leading-[normal] tracking-[normal] text-left text-base text-gray-300 font-inter mq673:flex-wrap mq673:pl-5 mq673:pr-5 mq673:box-border">
            <div className="flex-1 box-border flex items-center justify-center py-1 px-2 min-w-[196px] text-gray-200 border-r border-whitesmoke">
              <div className="flex flex-col items-center justify-center py-2">
                <img
                  className="w-4 h-5 relative overflow-hidden hide-on-mobile"
                  alt=""
                  src="/mainpage_icon/frame.svg"
                />
              </div>
              <div className="flex-1 rounded-md overflow-hidden flex items-center justify-center px-4">
                <input
                  className="flex-1 relative text-lg border-0 outline-none focus:outline-none hover:border-0 active:border-0 placeholder-bold"
                  placeholder="Where to?"
                />
              </div>
              <div className="flex flex-col items-center justify-center mobile-only pr-5">
                <img
                  className="w-4 h-5 relative overflow-hidden"
                  alt=""
                  src="/mainpage_icon/mobile-search.svg"
                />
              </div>
            </div>

            <div className="hide-on-mobile w-[195px] box-border flex flex-row items-start justify-start pt-[8.6px] px-0 pb-[11.5px] gap-[16.9px] border-r-[0.6px] ">
              <div className="flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0">
                <img
                  className="w-4 h-[17px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/mainpage_icon/frame-1.svg"
                />
              </div>
              <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[46px]">
                Dates
              </a>
            </div>
            <div className="hide-on-mobile flex flex-col items-start justify-start pt-2.5 pb-0 pr-[7px] pl-0">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/mainpage_icon/frame-2.svg"
              />
            </div>
            <div className="hide-on-mobile h-[52px] w-[243px] flex flex-col items-end justify-start pt-0 px-0 pb-3 box-border gap-[23px]">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-2.5 pl-0">
                <div className="flex-1 flex flex-row items-start justify-between shrink-0 gap-[20px]">
                  <div className="flex flex-col items-start justify-start pt-[8.6px] px-0 pb-0">
                    <a className="[text-decoration:none] relative font-semibold text-[inherit]">
                      2 guests · 1 room
                    </a>
                  </div>
                  <img
                    className="h-10 w-10 relative rounded-[20px]"
                    loading="lazy"
                    alt=""
                    src="/mainpage_icon/divomnisearch-content-searchactionarea.svg"
                  />
                </div>
              </div>
              <div className="hide-on-mobile h-8 rounded-[100px] bg-white flex flex-row items-end justify-start pt-2.5 pb-[7.4px] pr-2.5 pl-[11px] box-border gap-[15px] shrink-0 text-[12px]">
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[2.6px]">
                  <img
                    className="w-[17px] h-3 relative overflow-hidden shrink-0"
                    alt=""
                    src="/mainpage_icon/frame-3.svg"
                  />
                </div>
                <div className="flex flex-row items-start justify-start gap-[3.3px]">
                  <div className="flex flex-col items-start justify-start pt-[7.6px] px-0 pb-0">
                    <a className="[text-decoration:none] relative tracking-[0.12px] leading-[18px] font-semibold text-[inherit] inline-block min-w-[94px]">
                      Advanced Filter
                    </a>
                  </div>
                  <div className="h-px w-px relative rounded-[10px] bg-hotpink" />
                </div>
              </div>
            </div>
          </div> */}
          {/* <NavBar></NavBar> */}
        </div>
      </div>
    </section>
  );
};

export default Section1;
