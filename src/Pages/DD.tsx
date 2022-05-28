import React, { FC } from "react";

type DDProps = { children: string };

const DD: FC<DDProps> = (props) => {
  return (
    <>
      <dd className="text-sm text-gray-900 col-span-2 mt-1 sm:mt-0">
        {props.children}
      </dd>
    </>
  );
};
export default DD;
