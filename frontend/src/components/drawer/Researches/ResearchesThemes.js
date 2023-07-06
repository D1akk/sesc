import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "./ResearchesThemes.css";
import MaterialReactTable from "material-react-table";
import { Button } from "@mui/material";

export default function ResearchesThemes() {
  const [existResearches, setExistResearches] = useState([]);
  const [existTeachers, setExistTeachers] = useState([]);

  const fetchResearches = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/sesc/research-list/"
      );
      const teachers = await axios.get(
        "http://127.0.0.1:8000/sesc/teacher-list/"
      );
      setExistResearches(response.data);
      setExistTeachers(teachers.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchResearches();
  }, []);
  //table---------------------------------------------
  const getResearch = () =>
    existResearches.map(function (row) {
      return {
        title: row.title,
        research_area:
          row.research_area === "bio"
            ? "Биолого-экологический"
            : row.research_area === "math"
            ? "Математика и IT"
            : row.research_area === "physics"
            ? "Физико-технический"
            : row.research_area === "language"
            ? "Лингвистический"
            : row.research_area === "chemistry"
            ? "Химико-технологический"
            : null,
        teacher: existTeachers.map((teacher) => {
          if (teacher.teacher_id === row.teacher)
            return (
              teacher.surname + " " + teacher.name + " " + teacher.patronymic
            );
        }),
      };
    });

  const data = getResearch();

  const columns = useMemo(
    () => [
      {
        accessorKey: "title", //access nested data with dot notation
        header: "Название",
      },
      {
        accessorKey: "research_area",
        header: "Область исследования",
      },
      {
        accessorKey: "teacher",
        header: "Руководитель",
      },
    ],
    []
  );

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={data}
        renderTopToolbarCustomActions={({ table }) => {
          const updateResearches = () => {
            fetchResearches();
          };

          return (
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <Button
                color="info"
                onClick={updateResearches}
                variant="contained">
                Обновить
              </Button>
            </div>
          );
        }}
      />
    </>
  );
}
