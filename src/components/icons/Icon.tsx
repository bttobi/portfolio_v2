import React from "react";
import { IconType } from ".";

interface IconProps {
  type: IconType;
}

const Icon: React.FC<IconProps> = ({ type }) => {
  return <span className="material-symbols-outlined">{type}</span>;
};

export default Icon;
