import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export const SescProfiles = () => {
  return (
    <div className="SescProfiles">
      <div className="breadcumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to={"/"}>
            Главная страница
          </Link>
          <Typography color="text.primary">Профили</Typography>
        </Breadcrumbs>
      </div>
      <h1>Профили</h1>
    </div>
  );
};

export const SescProfilesOne = () => {
  return (
    <div className="SescProfiles">
      <div className="breadcumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to={"/"}>
            Главная страница
          </Link>
          <Link underline="hover" color="inherit" to={"/SescProfiles"}>
            Профили
          </Link>
          <Typography color="text.primary">
            Физико-технический профиль
          </Typography>
        </Breadcrumbs>
      </div>
      <h1>Физико-технический профиль</h1>
    </div>
  );
};

export const SescProfilesTwo = () => {
  return (
    <div className="SescProfiles">
      <div className="breadcumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to={"/"}>
            Главная страница
          </Link>
          <Link underline="hover" color="inherit" to={"/SescProfiles"}>
            Профили
          </Link>
          <Typography color="text.primary">Математика и IT</Typography>
        </Breadcrumbs>
      </div>
      <h1>Математика и IT</h1>
    </div>
  );
};

export const SescProfilesThree = () => {
  return (
    <div className="SescProfiles">
      <div className="breadcumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to={"/"}>
            Главная страница
          </Link>
          <Link underline="hover" color="inherit" to={"/SescProfiles"}>
            Профили
          </Link>
          <Typography color="text.primary">Биолого-экологический</Typography>
        </Breadcrumbs>
      </div>
      <h1>Биолого-экологический</h1>
    </div>
  );
};

export const SescProfilesFour = () => {
  return (
    <div className="SescProfiles">
      <div className="breadcumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to={"/"}>
            Главная страница
          </Link>
          <Link underline="hover" color="inherit" to={"/SescProfiles"}>
            Профили
          </Link>
          <Typography color="text.primary">Химико-технологический</Typography>
        </Breadcrumbs>
      </div>
      <h1>Химико-технологический</h1>
    </div>
  );
};

export const SescProfilesFifth = () => {
  return (
    <div className="SescProfiles">
      <div className="breadcumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to={"/"}>
            Главная страница
          </Link>
          <Link underline="hover" color="inherit" to={"/SescProfiles"}>
            Профили
          </Link>
          <Typography color="text.primary">Лингвистический</Typography>
        </Breadcrumbs>
      </div>
      <h1>Лингвистический</h1>
    </div>
  );
};
