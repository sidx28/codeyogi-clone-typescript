import { FC } from "react";
import { BiArrowBack } from "react-icons/bi";

const BackButton: FC = () => {
  return (
    <>
      <div>
        <button className="fixed top-4 right-4 border rounded-full text-gray-500 border-gray-500">
          <BiArrowBack className="h-6 w-6" />
        </button>
      </div>
    </>
  );
};
export default BackButton;
