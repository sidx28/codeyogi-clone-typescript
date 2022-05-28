import { FC } from "react";
type H1props = { children: string };
const H1: FC<H1props> = (props) => {
  return (
    <>
      <h1 className="mb-5 text-xl font-semibold">{props.children}</h1>
    </>
  );
};
export default H1;
