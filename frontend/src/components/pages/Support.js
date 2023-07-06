import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="home">
      <div className="body-content">
        <div className="breadcumb">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to={"/"}>
              Главная страница
            </Link>
            <Typography color="text.primary">Научные работы</Typography>
          </Breadcrumbs>
        </div>
        <h2>Научно-исследовательские работы</h2>
        <div className="text-content">
          <p>Поддержка</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
