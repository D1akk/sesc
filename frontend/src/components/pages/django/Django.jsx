import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { Link } from "react-scroll";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Django_data = () => {
  const [details, setDetails] = useState([]);
  const [selectedOption, setSelectedOption] = useState("none");
  const [addToFavorite, setAddToFavorite] = useState(false);

  const handleTypeSelect = (e) => {
    setSelectedOption(e.label);
  };

  const handleFavoriteSelect = (e) => {
    setAddToFavorite(!addToFavorite);
  };

  useEffect(() => {
    let data;
    axios
      .get("http://localhost:8000/view/researches")
      .then((res) => {
        data = res.data;
        setDetails(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const options = details.map(function (row) {
    return { value: row.id, label: `${row.title} [${row.research_area}]` };
  });

  return (
    <div className="home">
      <div className="django-body-right">
        <h3>Список научно-исследовательских работ:</h3>
        <div className="selected-option">
          <p style={{ fontSize: "24px" }}>Выбранный НИР: {selectedOption}</p>
          <div className="django-select-buttons">
            <button className="button-more">Подробнее</button>
            <button className="button-select">Выбрать</button>
            <IconButton
              size="large"
              color={addToFavorite ? "success" : "innerhit"}
              onClick={handleFavoriteSelect}>
              <StarBorderIcon />
            </IconButton>
          </div>
        </div>
        <div className="django-select">
          <Select
            options={options}
            placeholder="Название научной работы"
            maxMenuHeight={400}
            onChange={handleTypeSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default Django_data;
