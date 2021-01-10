import React, { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center h-screen w-screen w-full md:w-1/3 px-3 md:px-0">
        {children}
      </div>
    </div>
  );
};

export { Container };
