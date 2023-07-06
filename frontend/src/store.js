import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./actions/reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
