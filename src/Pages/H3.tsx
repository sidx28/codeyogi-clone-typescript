import { AllHTMLAttributes, FC } from "react";
type H3Props = AllHTMLAttributes<HTMLHeadingElement>;
const H3: FC<H3Props> = (props) => {
  return (
    <>
      <h1 className="text-lg font-medium leading-6 text-gray-900">
        {props.children}
      </h1>
    </>
  );
};
export default H3;
