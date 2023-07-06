import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { create_teacheruser } from "../../../actions/auth";
import axios from "axios";

const TeacherRegister = ({
  setOpen,
  setShowTeacherRegister,
  create_teacheruser,
  isAuthenticated,
  isTeacher,
  setUserName,
}) => {
  const [teacher, setTeacher] = useState({
    name: "",
    surname: "",
    patronimyc: "",
    email: "",
    password: "",
    password2: "",
  });
  const handleChange = (e) =>
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value,
    });

  const { name, surname, patronimyc, email, password, password2 } = teacher;
  const handleSubmit = (e) => {
    e.preventDefault();
    //implement the register logic
    const newUser = {
      name,
      surname,
      patronimyc,
      email,
      password,
      password2,
    };
    console.log(newUser);
    create_teacheruser(newUser);
  };

  const fetchUserTeacher = async () => {
    let gData;
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/sesc/teacher-list/"
      );
      console.log(localStorage.getItem("user_id"));
      gData = response.data;
      gData.map(function (data) {
        localStorage.setItem("teacher_id", data.teacher_id);
        localStorage.setItem("user_id", data.user_id);
      });
      console.log("teacher_id", localStorage.getItem("teacher_id"));
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && isTeacher) {
      setUserName(name + " " + patronimyc + " " + surname);
      localStorage.setItem("userName", name + " " + patronimyc + " " + surname);
      fetchUserTeacher();
      navigate("/");
      setOpen(false);
    }
  }, [isAuthenticated, isTeacher]);

  return (
    <div className="auth-form-container">
      <h2 style={{ color: "black", textAlign: "center" }}>
        Регистрация сотрудников в СУНЦ
      </h2>
      <h3
        style={{
          maxWidth: 600,
          textAlign: "left",
          fontSize: "13px",
          color: "black",
        }}>
        Внимание! После регистрации вам на эл.почту будет отправлено письмо для
        активации, проверьте папки Входящие и Спам. <br />
        Если возникли проблемы (сменилась почта, забыли пароль или логин) -
        обязательно прочтите инструкции внизу
      </h3>
      <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="surname">Фамилия</label>
        <input
          value={surname}
          onChange={(e) => handleChange(e)}
          type="surname"
          placeholder="surname"
          id="surname"
          name="surname"
        />
        <label htmlFor="name">Имя</label>
        <input
          value={name}
          onChange={(e) => handleChange(e)}
          type="name"
          placeholder="name"
          id="name"
          name="name"
        />

        <label htmlFor="patronimyc">Отчество</label>
        <input
          value={patronimyc}
          onChange={(e) => handleChange(e)}
          type="patronimyc"
          placeholder="patronimyc"
          id="patronimyc"
          name="patronimyc"
        />
        <label htmlFor="email">Эл.почта</label>
        <input
          value={email}
          onChange={(e) => handleChange(e)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Пароль</label>
        <input
          value={password}
          onChange={(e) => handleChange(e)}
          type="password"
          placeholder=""
          id="password"
          name="password"
        />
        <label htmlFor="password2">Пароль</label>
        <input
          value={password2}
          onChange={(e) => handleChange(e)}
          type="password"
          placeholder=""
          id="password2"
          name="password2"
        />
        <br></br>
        <button type="submit">Зарегистрироваться</button>
      </form>
      <Link
        onClick={() => setShowTeacherRegister(false)}
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

TeacherRegister.propTypes = {
  create_teacheruser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  isTeacher: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isTeacher: state.auth.isTeacher,
});

export default connect(mapStateToProps, { create_teacheruser })(
  TeacherRegister
);
