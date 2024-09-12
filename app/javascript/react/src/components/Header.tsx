import React from "react";

const Header = () => {
  return (
    <>
      {/* Header Start */}
      <div className="flex items-center justify-between px-5 py-5 bg-white border-b-2">
        <div className="text-2xl font-semibold">ChatRoom</div>
        <div className="flex items-center justify-center w-12 h-12 p-2 font-semibold text-white bg-yellow-500 rounded-full">
          USER
        </div>
      </div>
      {/* Header End */}
    </>
  );
};

export default Header;
