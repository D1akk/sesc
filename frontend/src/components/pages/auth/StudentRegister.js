import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { create_studentuser } from "../../../actions/auth";
import { connect } from "react-redux";
import axios from "axios";
import PropTypes from "prop-types";

const StudentRegister = ({
  setUserName,
  setOpen,
  setShowStudentRegister,
  create_studentuser,
  isAuthenticated,
  isStudent,
}) => {
  const [student, setStudent] = useState({
    name: "",
    surname: "",
    patronimyc: "",
    email: "",
    password: "",
    password2: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });

  const { name, surname, patronimyc, email, password, password2 } = student;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      name,
      surname,
      patronimyc,
      email,
      password,
      password2,
    };
    console.log(newStudent);
    create_studentuser(newStudent);
  };

  const fetchUserStudent = async () => {
    let gData;
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/sesc/student-list/"
      );
      console.log(localStorage.getItem("user_id"));
      gData = response.data;
      gData.map(function (data) {
        localStorage.setItem("student_id", data.student_id);
        localStorage.setItem("user_id", data.user_id);
      });
      console.log("student_id", localStorage.getItem("student_id"));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated && isStudent) {
      setUserName(email);
      localStorage.setItem("userName", email);
      fetchUserStudent();
      navigate("/");
      setOpen(false);
    }
    console.log(isAuthenticated, isStudent);
  }, [isAuthenticated, isStudent]);

  return (
    <div className="auth-form-container">
      <h2 style={{ color: "black", textAlign: "center" }}>
        Регистрация студентов в СУНЦ
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
        onClick={() => setShowStudentRegister(false)}
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

StudentRegister.propTypes = {
  create_studentuser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  isStudent: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isStudent: state.auth.isStudent,
});

export default connect(mapStateToProps, { create_studentuser })(
  StudentRegister
);
