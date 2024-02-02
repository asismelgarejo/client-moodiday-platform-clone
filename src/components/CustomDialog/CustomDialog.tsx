import React from "react";
import styles from "./CustomDialog.module.css";
import Link from "next/link";
import clsx from "clsx";

type CustomDialogProps = {
  children?: React.ReactNode;
  close?(): void;
};

const CloseButton: React.FC<CustomDialogProps> = ({ children, close }) => {
  const className = clsx(
    styles.closeBtn,
    "text-black bg-slate-200  absolute right-6 top-6 transition-transform duration-300 ease-in-out hover:bg-slate-300"
  );

  if (!close) {
    return (
      <Link href="/" scroll={false} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={() => close()} className={className}>
      {children}
    </button>
  );
};

const CustomDialog: React.FC<CustomDialogProps> = ({ children, close }) => {
  return (
    <div
      className="z-[1000] absolute"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden sm:min-w-[800px] min-h-96 rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 xs:w-full xl:max-w-sm bg-white">
            <CloseButton close={close}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </CloseButton>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDialog;
