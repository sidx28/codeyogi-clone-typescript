import { FC, InputHTMLAttributes } from "react";
type InputProps = {
  error?: string;
  touched?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
const Input: FC<InputProps> = ({ touched, error, ...rest }) => {
  return (
    <>
      <div className="w-full">
        <input
          {...rest}
          className="w-full rounded-md py-2 px-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {touched && error && <span className="text-red-500">{error}</span>}
      </div>
    </>
  );
};
export default Input;
