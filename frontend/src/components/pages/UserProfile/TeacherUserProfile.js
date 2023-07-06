import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const TeacherUserProfile = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {localStorage.getItem("userTeacher") === "true" &&
      localStorage.getItem("userStudent") === "false" ? (
        <div className="body-content">
          <h2>Личный кабинет сотрудника</h2>
          <hr></hr>
          <div>
            <p>ФИО: {localStorage.getItem("userName")}</p>
            <p>Должность: Преподаватель</p>
            <p>Почта:</p>
            <p>Научные работы:</p>
          </div>
        </div>
      ) : (
        navigate("/404")
      )}
    </>
  );
};
