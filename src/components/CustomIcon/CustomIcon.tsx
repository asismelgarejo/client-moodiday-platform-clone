import Image, { ImageProps } from "next/image";
import React from "react";

type CustomIcon = ImageProps;

const CustomIcon: React.FC<CustomIcon> = (props) => {
  return (
    <span>
      <Image height={12} width={12} {...props} alt={props?.alt ?? ""} />
    </span>
  );
};

export default CustomIcon;
