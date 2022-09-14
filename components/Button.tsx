import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <button
      type="submit"
      {...rest}
      className="text-white bg-pink-600 hover:bg-pink-800 disabled:bg-gray-300 focus:outline-none font-medium rounded-lg w-60 px-5 py-2.5 text-center self-end"
    >
      {title}
    </button>
  );
};

export default Button;
