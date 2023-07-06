/*import React, { useState, useEffect } from "react";
import axios from "axios";
export const djangoData = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    let data;
    axios
      .get("http://localhost:8000")
      .then((res) => {
        data = res.data;
        setDetails(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <header>Данные из Django </header>
      <hr></hr>
      {details.map((output, id) => (
        <div key={id}>
          <div>
            <h2>{output.title}</h2>
            <p>{output.research_area}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
*/
