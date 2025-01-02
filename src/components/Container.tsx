import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  [key: string]: unknown;
};

const Container: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`max-w-[1440px] mx-auto ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
