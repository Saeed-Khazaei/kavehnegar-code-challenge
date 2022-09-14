import React from "react";
import Wrapper from "../../components/Wrapper";

const CreateTicket = () => {
  return (
    <Wrapper title="ایجاد تیکت جدید">
      <div className="flex flex-col space-y-10">
        <div>
          <label
            htmlFor="ticket_title"
            className="block mb-3 text-sm font-medium text-gray-900 "
          >
            عنوان تیکت
          </label>
          <input
            type="text"
            id="ticket_title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="عنوان تیکت خود را وارد کنید..."
            required
          />
        </div>
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
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
            placeholder="متن تیکت را وارد کنید..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white bg-pink-600 hover:bg-pink-800 focus:outline-none font-medium rounded-lg w-60  px-5 py-2.5 text-center self-end "
        >
          ارسال تیکت
        </button>
      </div>
    </Wrapper>
  );
};

export default CreateTicket;
