import { combineReducers } from "redux";
import testReducer from "./testReducer";
import eventReducer from "../../features/event/eventReducer";

const rootReducers = combineReducers({
  test: testReducer,
  events: eventReducer
});

export default rootReducers;
