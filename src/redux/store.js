import { configureStore } from "@reduxjs/toolkit";
import { addContactReducer } from "./contact/reducer";

export const store = configureStore({
  reducer: { contact: addContactReducer },
});
