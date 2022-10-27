import { combineReducers } from "redux";
import loginReducers from "./../../Pages/Login/store/reducer";
import myListContentReducers from "../../Pages/Home/store/reducer";
import contentReducers from "../../Pages/Admin/store/reducer";
import myListBookReducers from "../../Pages/Book/store/reducer";

export default function createReducer() {
  const rootReducer = combineReducers({
    loginReducers,
    myListContentReducers,
    contentReducers,
    myListBookReducers,
  });
  return rootReducer;
}
