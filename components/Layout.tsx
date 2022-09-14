import React from "react";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <header className="h-16 w-full bg-white drop-shadow-xl sticky top-0" />
      <div className="w-full p-2 sm:p-5  md:p-10">
        <div className="w-full min-h-fit p-3 sm:p-6 md:p-12 bg-gray-100/100 rounded-2xl	">
          <div className="w-full min-h-fit ">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
