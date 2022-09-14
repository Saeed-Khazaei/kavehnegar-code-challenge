import React, { FC } from "react";
import Image from "next/image";
import { Message } from "../models/ticketsModel";

const Message: FC<Message> = ({ message, userName, isUser }) => {
  return (
    <div className="pt flex flex-col gap-4 px-16">
      <div className="flex flex-row items-end gap-x-2.5 ">
        <div
          className={`flex items-center justify-center w-11 h-11 rounded-full ${
            isUser ? "bg-blue-100 " : ""
          }`}
        >
          {isUser ? (
            <Image
              src="/icons/user.svg"
              layout="fixed"
              width="14px"
              height="14px"
            />
          ) : null}
        </div>
        <div
          className={`flex-auto w-64  mb-7 rounded-2xl  rounded-bl-none px-10 py-5 ${
            isUser ? "bg-gray-50" : "bg-red-50 "
          }`}
        >
          <div className="font-bold mb-5">
            {isUser ? "" : "پشتیبانی: "} {userName}
          </div>
          <div>{message}</div>
        </div>
        <div
          className={`flex items-center justify-center w-11 h-11 rounded-full ${
            !isUser ? "bg-pink-300 " : ""
          }`}
        >
          {!isUser ? (
            <Image
              src="/icons/support.svg"
              layout="fixed"
              width="14px"
              height="14px"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Message;
