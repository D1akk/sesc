/*import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Result, Button } from "antd";

export const NoMatch = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const backHome = () => {
    navigate.push("/");
  };

  if (!location?.from?.pathname) return <Route to="/" />;

  return (
    <div className="page404">
      <Result
        status="404"
        title="404"
        subTitle={`Страница ${location.from.pathname} не найдена`}
        extra={
          <Button onClick={backHome} type="primary">
            Вернуться на главную
          </Button>
        }
      />
    </div>
  );
};*/
