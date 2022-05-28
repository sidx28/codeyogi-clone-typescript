import { FC } from "react";
type SelectProps = { defaultOption: string; optionList: string[] };
const Select: FC<SelectProps> = (props) => {
  return (
    <>
      <select
        defaultValue={"default"}
        className="w-full text-sm bg-white border border-gray-300 rounded-md cursor-pointer focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 h-9"
      >
        <option disabled hidden value={"default"}>
          {props.defaultOption}
        </option>
        {props.optionList.map((e) => (
          <option value={e} key={e}>
            {e}
          </option>
        ))}
      </select>
    </>
  );
};
export default Select;
