import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "../../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";

const Login = ({
  setUserName,
  setOpen,
  setShowStudentRegister,
  setShowTeacherRegister,
  isAuthenticated,
  isStudent,
  login,
}) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  let navigate = useNavigate();
  const [dropdownState, setDropdownState] = useState({ open: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
    console.log("sended");
  };

  localStorage.getItem("teacher_id");
  localStorage.getItem("student_id");

  const loginChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const fetchUserTeacher = async () => {
    let gData;
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/sesc/teacher-list/"
      );
      gData = response.data;
      gData.map(function (data) {
        if (localStorage.getItem("user_id") === `${data.user_id}`) {
          localStorage.setItem("teacher_id", data.teacher_id);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  const fetchUserStudent = async () => {
    let gData;
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/sesc/student-list/"
      );
      gData = response.data;
      gData.map(function (data) {
        if (localStorage.getItem("user_id") === `${data.user_id}`)
          localStorage.setItem("student_id", data.id);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("userName", email);
      setUserName(email);
      if (
        localStorage.getItem("userTeacher") === "true" &&
        localStorage.getItem("userStudent") === "false"
      )
        fetchUserTeacher();
      if (
        localStorage.getItem("userTeacher") === "false" &&
        localStorage.getItem("userStudent") === "true"
      )
        fetchUserStudent();
      navigate("/");
      setOpen(false);
    }
  }, [isAuthenticated]);

  return (
    <div className="auth-form-container">
      <h2 style={{ color: "black" }}>Вход в аккаунт СУНЦ</h2>
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="login">Логин</label>
        <input
          value={email}
          onChange={(e) => loginChange(e)}
          type="email"
          placeholder="Email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Пароль</label>
        <input
          value={password}
          onChange={(e) => loginChange(e)}
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
            onClick={() => setShowStudentRegister(true)}
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
            onClick={() => setShowTeacherRegister(true)}
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  isStudent: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isStudent: state.auth.isStudent,
});

export default connect(mapStateToProps, { login })(Login);
