import React from "react";

const Start = ({ setDisplay }) => {
  return (
    <div className="flex flex-col gap-5 font-alfa items-center h-full justify-center">
      <div className="font-aclonica text-english-white text-[120px]">
        GEO QUIZ APP
      </div>
      <div onClick={() => setDisplay("question")} className="cursor-pointer bg-pinkCerise border-lightPink border-[6px] text-[48px] px-5 text-lightPink rounded-xl hover:scale-110 hover:text-white hover:border-white">
        START
      </div>
      <div className="text-english-white text-[24px] text-center">
        Don't let the setback define you <br />
        let them be stepping to triumph.
      </div>
    </div>
  );
};

export default Start;
