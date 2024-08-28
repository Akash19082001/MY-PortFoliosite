import React from "react";

const ScrollMouse = () => {
  return (
    <div
      id="mouse-scroll"
      className="flex flex-col items-center fixed bottom-10 left-1/2 transform -translate-x-1/2 z-[9999] m-auto"
    >
      <div className="mouse h-[21px] w-[14px] border-2 border-white rounded-full relative flex justify-center items-start md:h-[28px] md:w-[18px] lg:h-[35px] lg:w-[22px]">
        <div className="mouse-in w-[2px] h-[5px] bg-white mt-[5px] animate-animated-mouse md:w-[3px] md:h-[7px] lg:w-[4px] lg:h-[9px]"></div>
      </div>
      <div className="flex flex-col items-center mt-[10px]">
        <span className="down-arrow-1 w-[4px] h-[4px] transform rotate-45 border-r-2 border-b-2 border-white mb-[3px] ml-[2px] animate-mouse-scroll delay-[50ms] md:w-[5px] md:h-[5px] lg:w-[6px] lg:h-[6px]"></span>
        <span className="down-arrow-2 w-[4px] h-[4px] transform rotate-45 border-r-2 border-b-2 border-white mb-[3px] ml-[2px] animate-mouse-scroll delay-[100ms] md:w-[5px] md:h-[5px] lg:w-[6px] lg:h-[6px]"></span>
        <span className="down-arrow-3 w-[4px] h-[4px] transform rotate-45 border-r-2 border-b-2 border-white mb-[3px] ml-[2px] animate-mouse-scroll delay-[300ms] md:w-[5px] md:h-[5px] lg:w-[6px] lg:h-[6px]"></span>
      </div>
    </div>
  );
};

export default ScrollMouse;
