import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import bio from "../static/HomePage/bio.png";
import math from "../static/HomePage/math.png";
import chemistry from "../static/HomePage/xt.png";
import lingv from "../static/HomePage/lingv.png";
import physics from "../static/HomePage/fti.png";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-page">
        {isDesktopOrLaptop && (
          <p>
            Специализированный учебно-научный центр - Университетский лицей СВФУ
            приглашает Вас для поступления в 10 класс на 2023-2024 учебный год
            по следующим профилям:
          </p>
        )}
        {isTabletOrMobile && (
          <p>
            Специализированный учебно-научный центр - Университетский лицей СВФУ
            приглашает Вас для поступления в 10 класс на 2023-2024 учебный год
            по следующим профилям:
          </p>
        )}
        <div className="profiles-img">
          <p className="profile-name">Физико-технический</p>
          <img
            className="profile-image"
            src={physics}
            alt="Физико-технический"
            onClick={() => navigate("/SescProfiles/SescProfiles1")}
          />
          <p className="profile-name">Математика и IT</p>
          <img
            className="profile-image"
            src={math}
            alt="Математика-IT"
            onClick={() => navigate("/SescProfiles/SescProfiles2")}
          />
          <p className="profile-name">Биолого-экологический</p>
          <img
            className="profile-image"
            src={bio}
            alt="Биолого-экологический"
            onClick={() => navigate("/SescProfiles/SescProfiles3")}
          />
          <p className="profile-name">Химико-технологический</p>
          <img
            className="profile-image"
            src={chemistry}
            alt="Химико-технологический"
            onClick={() => navigate("/SescProfiles/SescProfiles4")}
          />
          <p className="profile-name">Лингвистический</p>
          <img
            className="profile-image"
            src={lingv}
            alt="Лингвистический"
            onClick={() => navigate("/SescProfiles/SescProfiles5")}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
