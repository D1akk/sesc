import { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Conferences = () => {
  const [existConferences, setExistConferences] = useState([]);
  useEffect(() => {
    fetchConferences();
  }, []);
  const fetchConferences = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/sesc/conference-list/"
      );
      setExistConferences(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(existConferences);
  return (
    <div className="conferences">
      <div className="nir-marks">
        <h2>Конференции научных работ</h2>
        <hr></hr>
        <div className="selected-option">
          {existConferences.map((row, id) => {
            return (
              <div key={id}>
                <h4>Название: {row.title}</h4>
                <p>Описание: {row.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Conferences;
