import React, { ComponentProps } from "react";

const Link: React.FC<ComponentProps<"a">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <a
      {...props}
      className={`font-bold text-lg cursor-pointer hover:text-accent ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
