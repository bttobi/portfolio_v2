import React, { ComponentProps } from "react";

const Link: React.FC<ComponentProps<"a">> = ({ children, ...props }) => {
  return (
    <a {...props} className="font-bold text-lg cursor-pointer">
      {children}
    </a>
  );
};

export default Link;
