import React, { FC } from "react";
import Image from "next/image";

interface StatusProps {
  status: "pending" | "answered" | "closed";
}

const Status: FC<StatusProps> = ({ status }) => {
  const returnStatsComponent = () => {
    switch (status) {
      case "pending":
        return (
          <>
            <Image
              src="/icons/time.svg"
              layout="fixed"
              width="14px"
              height="14px"
            />
            <span>در انتظار پاسخ</span>
          </>
        );
      case "answered":
        return (
          <>
            <Image
              src="/icons/checked.svg"
              layout="fixed"
              width="14px"
              height="14px"
            />
            <span>پاسخ داده شده</span>
          </>
        );
      case "closed":
        return (
          <>
            <Image
              src="/icons/_.svg"
              layout="fixed"
              width="14px"
              height="14px"
            />
            <span>بسته شده</span>
          </>
        );

      default:
        return null;
    }
  };
  return <>{returnStatsComponent()}</>;
};

export default Status;
