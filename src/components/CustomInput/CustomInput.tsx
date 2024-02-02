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
        "px-4 flex py-1 font-light text-black border grow text-normal rounded-3xl w-full",
        inputProps?.className ?? ""
      )}
      style={inputProps?.style ?? {}}
    >
      <button type="button" className="">
        {startIcon}
      </button>
      <input {...inputProps} className="w-full mx-2 outline-none" />
      <button type="button" className="">
        {endIcon}
      </button>
    </div>
  );
};

export default CustomInput;
