import React from "react";

const Wrapper = (props: { children: React.ReactNode; title: string }) => {
  return (
    <>
      <div className="text-2xl font-bold mb-6 md:mb-12">{props.title}</div>
      {props.children}
    </>
  );
};

export default Wrapper;
