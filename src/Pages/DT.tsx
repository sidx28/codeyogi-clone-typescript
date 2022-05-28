import React, { AllHTMLAttributes, DetailedReactHTMLElement, FC } from "react";
type DTProps = AllHTMLAttributes<HTMLDataListElement>;
const DT: FC<DTProps> = (props) => {
  return (
    <>
      <dt className="text-sm font-medium text-gray-500">{props.children}</dt>
    </>
  );
};
export default DT;
