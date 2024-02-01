import React from "react";

type layoutProps = {
  children: React.ReactNode;
  parallel: React.ReactNode;
};
const layout: React.FC<layoutProps> = ({ children, parallel }) => {
  return (
    <>
      {children}
      {parallel}
    </>
  );
};

export default layout;
