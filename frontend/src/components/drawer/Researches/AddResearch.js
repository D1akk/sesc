import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ResearchesThemes from "./ResearchesThemes";
import "./ResearchesThemes.css";
import Select from "react-select";

export const AddResearch = () => {
  const [newResearchTitle, setNewResearchTitle] = useState("");
  const [newResearchArea, setNewResearchArea] = useState("");
  const navigate = useNavigate();

  const addNewResearch = () => {
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/sesc/research-add/",
      headers: { "Content-Type": "application/json" },
      data: {
        title: newResearchTitle,
        research_area: newResearchArea,
        teacher: localStorage.getItem("teacher_id"),
      },
    }).then((res) => {
      console.log(res.data);
    });
  };
  console.log(localStorage.getItem("teacher_id"));
  console.log(newResearchTitle);
  console.log(newResearchArea);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewResearch();
  };

  const handleTypeSelect = (e) => {
    setNewResearchArea(e.value);
  };

  const researchAreaOptions = [
    { value: "physics", label: "Физико-технический" },
    { value: "math", label: "Математика и ИТ" },
    { value: "bio", label: "Биолого-экологический" },
    { value: "chemistry", label: "Химико-технический" },
    { value: "language", label: "Лингвистический" },
  ];

  return (
    <>
      {localStorage.getItem("userTeacher") === "true" &&
      localStorage.getItem("userStudent") === "false" ? (
        <div className="home">
          <div className="research-add">
            <h2>Добавление научной работы</h2>
            <hr></hr>
            <form className="research-add-form" onSubmit={handleSubmit}>
              <label htmlFor="research-title">Название научной работы:</label>
              <input
                value={newResearchTitle}
                onChange={(e) => setNewResearchTitle(e.target.value)}
                type="research_title"
                placeholder="Название"
                id="research_title"
                name="research_title"
              />
              <label htmlFor="research-area">
                Область исследования научной работы:
              </label>
              <Select
                className="research-area-select"
                options={researchAreaOptions}
                onChange={handleTypeSelect}
              />
              <button type="submit">Добавить</button>
              <p style={{ fontSize: "14px" }}>
                После добавления нажмите на кнопку обновить в таблице, чтобы
                добавленная вами научная работа появилась
              </p>
            </form>
          </div>
          <div className="body-content-right">
            <div className="body-content-researches">
              <h2>Существующие научные работы</h2>
              <hr></hr>
              <ResearchesThemes />
            </div>
          </div>
        </div>
      ) : (
        navigate("/404")
      )}
    </>
  );
};
