import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Login = ({ setIsLoggedIn, setUserName, setOpen, setRedirect }) => {
  const [login, setlogin] = useState("");
  const [pass, setPass] = useState("");
  const [logged, setLogged] = useState(false);
  let navigate = useNavigate();
  const [dropdownState, setDropdownState] = useState({ open: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLoggin();
  };

  const handleAdmin = () => {
    //setIsAdmin(true);
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("userName", login);
    setUserName(login);
    setIsLoggedIn(true);
    navigate("/");
  };

  const login_data = [
    { login: "admin", password: "12345" },
    { login: "prepod", password: "12345" },
    { login: "prepod2", password: "12345" },
    { login: "prepod3", password: "12345" },
    { login: "prepod4", password: "12345" },
    { login: "prepod5", password: "12345" },
    { login: "prepod6", password: "12345" },
    { login: "prepod7", password: "12345" },
  ];

  const handleLoggin = () => {
    login_data.find((item) => item.login === login && item.password === pass)
      ? auth()
      : alert("Логин или пароль неправильны!");
  };

  const auth = () => {
    setLogged(true);
    alert("Вы успешно вошли!");
    //handleAdmin();
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("userName", login);
    setOpen(false);
    setUserName(login);
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div className="auth-form-container">
      <h2 style={{ color: "black" }}>Вход в аккаунт СУНЦ</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="login">Логин</label>
        <input
          value={login}
          onChange={(e) => setlogin(e.target.value)}
          type="login"
          placeholder="Логин"
          id="login"
          name="login"
        />
        <label htmlFor="password">Пароль</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Пароль"
          id="password"
          name="password"
        />
        <button type="submit">Войти</button>
      </form>
      <label className="label-checkbox" htmlFor="checkbox">
        <input type="checkbox" />
        Запомнить меня
      </label>
      <button
        className="link-btn"
        onClick={() => setDropdownState({ open: !dropdownState.open })}>
        Нет аккаунта? Зарегистрироваться
      </button>
      {dropdownState.open && (
        <div className="dropdown-items">
          <Link
            onClick={() => setRedirect(true)}
            style={{
              textAlign: "center",
              marginTop: "5px",
            }}
            underline="hover"
            color="black">
            Регистрация для студентов
          </Link>
          <br />
          <Link
            onClick={() => setRedirect(true)}
            style={{
              textAlign: "center",
              marginTop: "5px",
            }}
            underline="hover"
            color="black">
            Регистрация для сотрудников
          </Link>
        </div>
      )}
    </div>
  );
};
