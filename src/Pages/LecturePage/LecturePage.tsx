import { useState, useEffect, FC } from "react";
import { getCachedData, getLectures } from "../../api";
import H1 from "../H1";
import LectureTile from "./LectureTile";
import { ImSpinner7 } from "react-icons/im";
import { Lecture } from "../../models/lecture";
const LecturePage: FC = () => {
  let i = 0;
  const [spinner, showSpinner] = useState(true);
  const cachedLectures = getCachedData<Lecture>("lectures") || [];
  const [lectureList, setLectureList] = useState(cachedLectures);
  useEffect(() => {
    const promise = getLectures();
    showSpinner(true);
    promise.then((lectures) => {
      setLectureList(lectures);
      showSpinner(false);
    });
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-8 w-full">
      <div className="md:mt-10">
        {spinner && (
          <div className="flex items-center">
            <ImSpinner7 className="h-5 w-5 mr-2 animate-spin" />
            Loading...
          </div>
        )}
        <H1>Lecture List</H1>
        <div className="flex items-center justify-center px-4 md:px-6 py-4 mt-2 bg-gray-50 ">
          <div className="space-y-8 px-5 w-full">
            {lectureList.map((e) => (
              <LectureTile
                length={lectureList.length}
                i={i++}
                lecture={e}
                key={e.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturePage;
