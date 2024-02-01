import clsx from "clsx";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

type CustomInput = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
};

const CustomInput: React.FC<CustomInput> = (props) => {
  const { endIcon = null, startIcon = null, ...inputProps } = props;
  return (
    <div
      className={clsx(
        "px-4 flex py-1 font-light text-black border text-normal rounded-2xl",
        inputProps?.className ?? ""
      )}
    >
      <div className="flex items-center">
        <button type="button" className="">
          {startIcon}
        </button>
        <input {...inputProps} className="min-w-100px mx-2 outline-none" />
        <button type="button" className="">
          {endIcon}
        </button>
      </div>
    </div>
  );
};

export default CustomInput;
