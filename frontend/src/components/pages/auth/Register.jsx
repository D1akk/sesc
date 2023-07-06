import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Register = ({ setOpen, setRedirect }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [passport, setPassport] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    alert("Регистрация завершена!");
    navigate("/");
  };

  return (
    <div className="auth-form-container">
      <h2 style={{ color: "black" }}>Регистрация студентов в СУНЦ</h2>
      <h3
        style={{
          maxWidth: 600,
          textAlign: "left",
          fontSize: "13px",
          color: "black",
        }}>
        <bold>Внимание!</bold> После регистрации вам на эл.почту будет
        отправлено письмо для активации, проверьте папки Входящие и Спам. <br />
        Если возникли проблемы (сменилась почта, забыли пароль или логин) -
        обязательно прочтите инструкции внизу
      </h3>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Фамилия имя отчество</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="name"
          placeholder="Введите ваше ФИО"
        />
        <label htmlFor="name">Дата рождения</label>
        <input
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          name="birthday"
          id="birthday"
          placeholder="Введите дату рождения в формате дд.мм.гггг"
        />
        <label htmlFor="name">Серия и номер документа (все слитно)</label>
        <input
          value={passport}
          onChange={(e) => setPassport(e.target.value)}
          name="passport"
          id="passport"
          placeholder="Введите серию и номер паспорта"
        />
        <button type="submit">Проверить данные</button>
        <br></br>
        <label htmlFor="email">Эл.почта</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
      <Link
        onClick={() => setRedirect(false)}
        style={{
          textAlign: "center",
          marginTop: "5px",
        }}
        underline="hover"
        color="black">
        Уже есть аккаунт? Войдите сюда
      </Link>
      <Link
        onClick={() => alert("nothing!")}
        style={{
          textAlign: "center",
          marginTop: "5px",
        }}
        underline="hover"
        color="black">
        Инструкция о регистрации/восстановлении доступа
      </Link>
    </div>
  );
};
