import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const StudentList = () => {
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let data;
    axios
      .get("http://127.0.0.1:8000/sesc/student-list/")
      .then((res) => {
        data = res.data;
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ marginLeft: "280px" }}>
      {localStorage.getItem("userTeacher") === "true" &&
      localStorage.getItem("userStudent") === "false" ? (
        <>
          <h2>Список студентов</h2>
          <hr></hr>
          {details.map((output, id) => (
            <div key={id}>
              <div className="text-content">
                <h3>student №{id}</h3>
                <p>name: {output.name}</p>
                <p>patronymic: {output.patronimyc}</p>
                <p>surname: {output.surname}</p>
                <p>grade: {output.grade}</p>
                <p>
                  {output.researches.map((st_output, id) => (
                    <div key={id}>
                      <p>
                        тема НИР №{id}: {st_output.title}{" "}
                      </p>
                    </div>
                  ))}
                </p>
                <hr></hr>
              </div>
            </div>
          ))}
        </>
      ) : (
        navigate("/404")
      )}
    </div>
  );
};
