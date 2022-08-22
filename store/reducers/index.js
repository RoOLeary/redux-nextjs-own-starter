import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import anotherReducer from "./anotherReducer";

export default combineReducers({
  postData: postsReducer,
  testRed: anotherReducer
});
