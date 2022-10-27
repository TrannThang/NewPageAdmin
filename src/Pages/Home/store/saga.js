import { takeLatest, put, call, all } from "redux-saga/effects";
import { GET_ZING_NEW_CONTENT } from "./contants";
import { getZingNew } from "../../../Services/classServices";
import { setLoading, saveZingNewContent } from "./action";

function* zingNewContent() {
  try {
    yield put(setLoading(true));
    const response = yield call(getZingNew);
    console.log(response);
    yield all([put(setLoading(false)), put(saveZingNewContent(response.data))]);
  } catch (error) {
    yield put(setLoading(false));
  }
}
export function* listMyContent() {
  yield takeLatest(GET_ZING_NEW_CONTENT, zingNewContent);
}
