import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import testReducer from "./testReducer";
import eventReducer from "../../features/event/eventReducer";
import modalsReducer from "../../features/modals/modalReducer";
import authReducer from "../../features/auth/authReducer";

const rootReducers = combineReducers({
  form: FormReducer,
  test: testReducer,
  events: eventReducer,
  modals: modalsReducer,
  auth: authReducer
});

export default rootReducers;
