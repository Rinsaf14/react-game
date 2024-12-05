import React from "react";

const Header = ({ display }) => {
  return (
    <div className="bg-[#8e44ad] w-full flex items-center px-[73px] py-[9px] text-english-white font-aclonica h-[88px]">
      {display !== "start" && <div className="text-[55px]">GEO QUIZ APP</div>}
    </div>
  );
};

export default Header;
