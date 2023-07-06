import axios from "axios";
import {
  STUDENT_USER_LOADED,
  STUDENT_USER_FAILED,
  TEACHER_USER_LOADED,
  TEACHER_USER_FAILED,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_CUSER_SUCCESS,
  REGISTER_FUSER_FAILED,
  REGISTER_FUSER_SUCCESS,
  REGISTER_CUSER_FAILED,
} from "../actions/types";

export const getStudentUser = () => (dispatch, getState) => {
  const token = getState().auth.token;
  const is_student = getState().auth.isStudent;
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token && is_student) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  axios
    .get("http://127.0.0.1:8000/sesc/student/dashboard/", config)
    .then((res) => {
      dispatch({
        type: STUDENT_USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: STUDENT_USER_FAILED,
      });
    });
};

// check token and load teacher user
export const getTeacherUser = () => (dispatch, getState) => {
  const token = getState().auth.token;
  const is_student = getState().auth.isStudent;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token && !is_student) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .get("http://127.0.0.1:8000/sesc/teacher/dashboard/", config)
    .then((res) => {
      dispatch({
        type: TEACHER_USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: TEACHER_USER_FAILED,
      });
    });
};

export const create_studentuser =
  ({ name, surname, patronimyc, email, password, password2 }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      name,
      surname,
      patronimyc,
      email,
      password,
      password2,
    });
    axios
      .post("http://127.0.0.1:8000/sesc/signup/student/", body, config)
      .then((res) => {
        dispatch({
          type: REGISTER_CUSER_SUCCESS,
          payload: res.data,
        });

        console.log(res.data);
      })

      .catch((err) => {
        dispatch({
          type: REGISTER_CUSER_FAILED,
        });
        alert(err.response.data);
      });
  };

export const create_teacheruser =
  ({ name, surname, patronimyc, email, password, password2 }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      name,
      surname,
      patronimyc,
      email,
      password,
      password2,
    });

    axios
      .post("http://127.0.0.1:8000/sesc/signup/teacher/", body, config)
      .then((res) => {
        dispatch({
          type: REGISTER_FUSER_SUCCESS,
          payload: res.data,
        });
        console.log(res.data);
        if (email === "secretar@svfu.ru")
          localStorage.setItem("secretar", true);
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FUSER_FAILED,
        });
        alert(err.response.data);
      });
  };

export const login =
  ({ email, password }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password });
    axios
      .post("http://127.0.0.1:8000/sesc/login/", body, config)
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
        console.log(res.data);
        if (email === "secretar@svfu.ru")
          localStorage.setItem("secretar", true);
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAILED,
        });
        alert(err.data);
      });
  };

export const logout = () => (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  axios
    .post("http://127.0.0.1:8000/sesc/logout/", null, config)
    .then((res) => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err.data);
    });
};
