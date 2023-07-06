import "./App.css";
import React, { useState } from "react";
import Login from "./components/pages/auth/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/navigation/Sidebar";
import { HomeSesc, AboutSesc, DocumentsSesc } from "./components/pages/SescNav";
import {
  SescProfiles,
  SescProfilesOne,
  SescProfilesTwo,
  SescProfilesThree,
  SescProfilesFour,
  SescProfilesFifth,
} from "./components/pages/SescProfiles";
import Contact from "./components/pages/ContactUs";
import Nir from "./components/pages/Nir/Nir";
import Conferences from "./components/pages/Nir/Conferences";
import HomePage from "./components/pages/HomePage";
import { Blog } from "./components/pages/Blog/Blog";
import Footer from "./components/navigation/footer/footer";
import StudentRegister from "./components/pages/auth/StudentRegister";
import TeacherRegister from "./components/pages/auth/TeacherRegister";
import { AddResearch } from "./components/drawer/Researches/AddResearch";
import { StudentList } from "./components/drawer/StudentList";
import { TeacherUserProfile } from "./components/pages/UserProfile/TeacherUserProfile";
import { StudentUserProfile } from "./components/pages/UserProfile/StudentUserProfile";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { AddNirMarks } from "./components/drawer/Researches/AddNirMarks";

const App = () => {
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  return (
    <Router>
      <Sidebar userName={userName} setUserName={setUserName} />

      <Routes>
        <Route Component={<Login />} />
        <Route Component={<StudentRegister />} />
        <Route Component={<TeacherRegister />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/home-sesc" element={<HomeSesc />} />
        <Route path="/home-sesc/about-us" element={<AboutSesc />} />
        <Route path="/home-sesc/documents" element={<DocumentsSesc />} />
        <Route path="/SescProfiles" element={<SescProfiles />} />
        <Route path="/teacher-user-profile" element={<TeacherUserProfile />} />
        <Route path="/student-user-profile" element={<StudentUserProfile />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/research-add" element={<AddResearch />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/add-nir-marks" element={<AddNirMarks />} />

        <Route
          path="/SescProfiles/SescProfiles1"
          element={<SescProfilesOne />}
        />

        <Route
          path="/SescProfiles/SescProfiles2"
          element={<SescProfilesTwo />}
        />
        <Route
          path="/SescProfiles/SescProfiles3"
          element={<SescProfilesThree />}
        />
        <Route
          path="/SescProfiles/SescProfiles4"
          element={<SescProfilesFour />}
        />
        <Route
          path="/SescProfiles/SescProfiles5"
          element={<SescProfilesFifth />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/nir" element={<Nir userName={userName} />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
