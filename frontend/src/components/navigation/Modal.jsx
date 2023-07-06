import React from "react";
import "./modal.css";
import logo_sesc from "../static/Rectangle 4.svg";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modalContainer">
        <img src={logo_sesc} alt="" />
        <div className="modalRight">
          <p onClick={onClose} className="closeBtn">
            X
          </p>
        </div>
        <div className="content">
          <div className="Login-auth">
            <div className="auth-form-container">
              <h2>Вход в аккаунт СУНЦ</h2>
              <form className="login-form">
                <label htmlFor="email">Логин</label>
                <input
                  type="email"
                  placeholder="Логин"
                  id="email"
                  name="email"
                />
                <label htmlFor="password">Пароль</label>
                <input
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
              <button className="link-btn">
                Нет аккаунта? Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
