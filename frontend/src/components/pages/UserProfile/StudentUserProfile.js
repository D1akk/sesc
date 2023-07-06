import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const StudentUserProfile = () => {
  const navigate = useNavigate();
  return (
    <div style={{ marginLeft: "280px" }}>
      {localStorage.getItem("token") ? (
        <>
          <h2>Личный кабинет студента</h2>
        </>
      ) : (
        navigate("/404")
      )}
    </div>
  );
};
