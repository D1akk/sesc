import {
  STUDENT_USER_LOADED,
  STUDENT_USER_FAILED,
  TEACHER_USER_LOADED,
  TEACHER_USER_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  REGISTER_CUSER_SUCCESS,
  REGISTER_FUSER_FAILED,
  REGISTER_FUSER_SUCCESS,
  REGISTER_CUSER_FAILED,
} from "../types";

const initialState = {
  token: localStorage.getItem("token"),
  userStudent: localStorage.getItem("userStudent"),
  userTeacher: localStorage.getItem("userStudent"),
  user_id: localStorage.getItem("user_id"),
  isAuthenticated: false,
  isStudent: null,
  isTeacher: null,
  isLoading: false,
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_CUSER_SUCCESS:
    case REGISTER_FUSER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      console.log("register.userTeacher: ", action.payload.user.is_teacher);
      localStorage.setItem("userTeacher", action.payload.user.is_teacher);
      localStorage.setItem("userStudent", action.payload.user.is_student);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isStudent: action.payload.user.is_student,
        isTeacher: action.payload.user.is_teacher,
        isLoading: false,
      };
    case STUDENT_USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isStudent: true,
        isTeacher: false,
        user: action.payload,
      };
    case TEACHER_USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        isStudent: false,
        isTeacher: true,
        user: action.payload,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userTeacher", action.payload.is_teacher);
      localStorage.setItem("userStudent", action.payload.is_student);
      localStorage.setItem("user_id", action.payload.user_id);
      console.log("login.is_teacher: ", action.payload.is_teacher);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isStudent: action.payload.is_student,
        isTeacher: action.payload.is_teacher,
        isLoading: false,
      };

    case REGISTER_CUSER_FAILED:
    case REGISTER_FUSER_FAILED:
    case LOGIN_FAILED:
      localStorage.removeItem("token");
      localStorage.removeItem("userStudent");
      localStorage.removeItem("userTeacher");
      return {
        ...state,
        token: null,
        isStudent: null,
        isTeacher: null,
        isAuthenticated: false,
        isLoading: false,
      };

    case STUDENT_USER_FAILED:
    case TEACHER_USER_FAILED:
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      localStorage.removeItem("userTeacher");
      localStorage.removeItem("userStudent");
      localStorage.removeItem("teacher_id");
      localStorage.removeItem("student_id");
      localStorage.removeItem("user_id");
      localStorage.removeItem("secretar");
      return {
        ...state,
        token: null,
        isStudent: null,
        isTeacher: null,
        isAuthenticated: false,
        isLoading: false,
      };
  }
  return state;
};
