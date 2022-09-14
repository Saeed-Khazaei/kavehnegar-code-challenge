import React, { FC, InputHTMLAttributes } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type: "input" | "textarea";
  label: string;
  name: string;
}

const Input: FC<InputProps> = ({ label, name, type, ...rest }) => {
  return (
    <>
      {type == "input" ? (
        <>
          <label
            htmlFor={name}
            className="block mb-3 text-sm font-medium text-gray-900 "
          >
            {label}
          </label>
          <input
            type="text"
            id={name}
            name={name}
            {...rest}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="عنوان تیکت خود را وارد کنید..."
          />
        </>
      ) : (
        <>
          <label
            htmlFor={name}
            className="block mb-3 text-sm font-medium text-gray-900"
          >
            {label}
          </label>
          <textarea
            id={name}
            name={name}
            rows={4}
            {...rest}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
            placeholder="متن تیکت را وارد کنید..."
          />
        </>
      )}
    </>
  );
};

export default Input;
