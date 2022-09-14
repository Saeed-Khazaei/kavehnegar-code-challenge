import React from "react";
import Image from "next/image";
import Status from "../../components/Status";
import Message from "../../components/Message";
import { useCloseTicketForm } from "../../hooks/useCloseTicketForm";

const TicketDetails = () => {
  const { isLoading, onCloseTicket, data } = useCloseTicketForm();
  if (!data?.data) return null;

  return (
    <div className="bg-white px-10 py-9 rounded-lg divide-y">
      <div className="flex flex-row justify-between mb-2">
        <div className="text-2xl font-bold">{data.data.title}</div>
        <div className="flex flex-col gap-2">
          <span>
            {new Date(data.data.received).toLocaleDateString("fa-IR")}
          </span>
          <div className="flex flex-row items-center gap-2">
            <Status status={data.data.status} />
          </div>
        </div>
      </div>
      <div className="pt-9 flex flex-col gap-4 px-16">
        <Message
          message={data.data.message}
          userName={data.data.user}
          isUser={true}
        />
        {data.data.supportMessage.length > 0 ? (
          <Message
            message={data.data.supportMessage}
            userName={data.data.support}
            isUser={false}
          />
        ) : null}
        <div className="flex flex-row items-end gap-x-2.5 mt-10">
          <div className="flex items-center justify-center w-11 h-11 bg-blue-100 rounded-full">
            <Image
              src="/icons/user.svg"
              layout="fixed"
              width="14px"
              height="14px"
            />
          </div>
          <div className="flex-auto w-64 mb-7 rounded-2xl  rounded-bl-none">
            <div>
              <label
                htmlFor="message"
                className="block mb-3 text-sm font-medium text-gray-900"
              >
                متن تیکت
              </label>
              <textarea
                id="message"
                rows={4}
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-4"
                placeholder="متن موردنظرتان را وارد کنید..."
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center w-11 h-11 "></div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
