import { FC, useEffect, useState } from "react";
import AssignmentTile from "./AssignmentTile";
import H1 from "../H1";
import { ImSpinner7 } from "react-icons/im";
import { getAssignmentList, getCachedData } from "../../api";
import { Assignment } from "../../models/assignment";

const AssignmentPage: FC = () => {
  const [spinner, setShowSpinner] = useState(true);
  const cachedAssignment = getCachedData<Assignment>("assignments") || [];
  const [assignments, setAssignments] = useState(cachedAssignment);

  useEffect(() => {
    const promise = getAssignmentList();
    setShowSpinner(true);
    promise.then((assignmentList) => {
      setAssignments(assignmentList);
      setShowSpinner(false);
    });
  }, []);

  return (
    <div className="py-6 px-8 w-full">
      <div className="md:mt-10">
        {spinner && (
          <div className="flex items-center">
            <ImSpinner7 className="h-5 w-5 mr-2 animate-spin" />
            Loading...
          </div>
        )}
        <H1>Assignment List</H1>
        <div className="flex items-center justify-center px-6 py-4 mt-2 bg-gray-50 ">
          <div className="space-y-8 px-5 w-full">
            {assignments.map((e) => (
              <AssignmentTile assignment={e} key={e.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentPage;
