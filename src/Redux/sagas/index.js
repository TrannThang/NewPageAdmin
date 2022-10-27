import { all } from "redux-saga/effects";
import * as loginSaga from "../../Pages/Login/store/saga";
import * as listContentSaga from "../../Pages/Home/store/saga";
import * as adminContentSaga from "../../Pages/Admin/store/saga";
import * as listBookSaga from "../../Pages/Book/store/saga";

/* eslint-disable import/no-anonymous-default-export */
export default function* () {
  yield all([
    loginSaga.listMyLogin(),
    listContentSaga.listMyContent(),
    adminContentSaga.listMyZingNewContent(),
    listBookSaga.listMyBook(),
  ]);
}
