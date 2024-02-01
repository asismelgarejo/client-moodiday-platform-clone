import React from "react";

type CustomDialogProps = {
  children?: React.ReactNode;
};

const CustomDialog: React.FC<CustomDialogProps> = ({ children }) => {
  return (
    <div
      className="z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className="transform overflow-hidden sm:min-w-[800px] min-h-96 rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 xs:w-full xl:max-w-sm bg-white"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDialog;
