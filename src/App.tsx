import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import LecturePage from "./Pages/LecturePage/LecturePage";
import AssignmentPage from "./Pages/AssignmentPage/AssignmentPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="lectures" />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="assignments" element={<AssignmentPage />} />
          <Route path="lectures" element={<LecturePage />} />
          {/* <Route
          path="assignment/:assignmentNumber/details"
          element={<AssignmentDetail />}
          /> */}
          {/* <Route path="profile" element={<Profile />} /> */}
        </Route>
        {/* <Route path="quiz" element={<Quiz />} /> */}
      </Routes>
    </>
  );
}
export default App;
