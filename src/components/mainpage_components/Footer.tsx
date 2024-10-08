import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const Footer: FunctionComponent<FrameComponentType> = ({ className = "" }) => {
  return (
    <footer
      className={`flex flex-col items-start justify-start gap-[90.6px] max-w-[1920px] self-center w-full text-left text-sm text-gray-100 font-inter mq450:gap-[23px] mq900:gap-[45px] mt-[50px] px-5 ${className}`}
    >
      <div className="flex flex-row mq900:flex-col flex-wrap items-start justify-start gap-[58.4px] max-w-full w-full mq900:gap-[29px] mx-5">
        <div className="w-[25%] mq650:mb-5 flex flex-row items-start justify-start py-0 pr-[135px] pl-0 box-border gap-[17.3px] max-w-full text-36xl text-darkgray-100 mq450:gap-[89px] mq450:pr-5 mq450:box-border">
          <div className="self-stretch flex flex-row h-[80px] mq650:h-[20px] relative">
            <h1 className="font-extrabold m-0 absolute top-[0px] left-[0px] text-inherit tracking-[-2.2px] leading-[55px] font-extrabold font-inherit inline-block w-[302.4px] mq650:text-14xl mq650:leading-[33px] mq900:text-25xl mq900:leading-[44px]">
              Travel is for everyone
              <span
                className="bg-clip-text text-transparent inline-block"
                style={{
                  background: "#f35597",
                  backgroundSize: "100% 200%",
                  backgroundPosition: "50% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  width: "16px",
                }}
              >
                .
              </span>
            </h1>
          </div>
        </div>

        <div className="w-[60%] mq900:w-full flex flex-col items-start justify-start pt-[10.6px] px-0 pb-0 box-border max-w-full font-poppins">
          <div className="self-stretch flex flex-row mq650:flex-wrap items-start justify-between gap-[20px] mq450:flex-wrap mq900@">
            <div className="flex flex-col items-start justify-start  pb-0 pr-4 pl-0 font-poppins">
              <div className="flex flex-col items-start justify-start gap-[15px]">
                <div className="relative text-lg leading-[27px] uppercase font-semibold font-inter text-gray-300 inline-block min-w-[123px]">
                  Cuddlynest
                </div>
                <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[64px]">
                  About us
                </a>
                <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[79px]">
                  Contact us
                </a>
                <div className="relative tracking-[0.14px] leading-[21px] inline-block min-w-[123px]">
                  List your property
                </div>
                <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit]">
                  CuddlyCare Program
                </a>
                <div className="relative tracking-[0.14px] leading-[21px]">
                  The CuddlyNest Promise
                </div>
                <div className="relative tracking-[0.14px] leading-[21px]">{`FAQ & Help Center`}</div>
                <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[76px]">
                  Newsroom
                </a>
                <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[32px]">
                  Blog
                </a>
              </div>
            </div>
            {/* Unique stays column starts here */}
            <div className="flex flex-col items-start justify-start gap-[15px] min-w-[146px] mq450:flex-1">
              <div className="relative text-lg leading-[27px] uppercase font-semibold font-inter text-gray-300">
                Unique stays
              </div>
              <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[121px]">
                Family vacations
              </a>
              <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[119px]">
                Adventure travel
              </a>
              <div className="relative tracking-[0.14px] leading-[21px]">
                Romantic getaways
              </div>
              <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[89px]">
                Group travel
              </a>
              <div className="relative tracking-[0.14px] leading-[21px] inline-block min-w-[107px]">
                Business travel
              </div>
              <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit]">
                Digital nomad travel
              </a>
              <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[75px]">
                Solo travel
              </a>
              <div className="relative tracking-[0.14px] leading-[21px] inline-block min-w-[87px]">
                Luxury stays
              </div>
            </div>
            {/* Explore stays colums starts here */}
            <div className="flex flex-col items-start justify-start gap-[15px] min-w-[118px] mq450:flex-1">
              <div className="relative text-lg leading-[27px] uppercase font-semibold font-inter text-gray-300 inline-block min-w-[82px]">
                Explore
              </div>
              <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[45px]">
                Hotels
              </a>
              <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[118px]">
                Vacation rentals
              </a>
              <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[52px]">
                Hostels
              </a>
              <div className="relative tracking-[0.14px] leading-[21px] inline-block min-w-[38px]">
                Villas
              </div>
              <div className="relative tracking-[0.14px] leading-[21px] inline-block min-w-[36px]">{`B&Bs`}</div>
              <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[85px]">
                Apartments
              </a>
              <div className="relative tracking-[0.14px] leading-[21px] inline-block min-w-[51px]">
                Cabins
              </div>
              <div className="relative tracking-[0.14px] leading-[21px] inline-block min-w-[78px]">
                Bungalows
              </div>
            </div>
            <div className=" flex flex-col items-start justify-start gap-[36.5px] text-xs text-gray-100 font-poppins mq450:gap-[18px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[11.6px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4.5px]">
                  <div className="self-stretch relative leading-[27px] font-semibold">
                    Millions of places to stay, one app.
                  </div>
                  <img
                    className="w-[163px] h-12 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/mainpage_icon/img-12.svg"
                  />
                </div>
                <img
                  className="w-[163px] h-12 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/mainpage_icon/img-13.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start gap-[29.2px]">
                <div className="relative tracking-[0.24px] leading-[15px] inline-block min-w-[120px]">{`Terms & conditions`}</div>
                <div className="relative tracking-[0.24px] leading-[15px] inline-block min-w-[86px]">
                  Privacy policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
