import { INIT_STATE } from "./state";
import { produce } from "immer";
import { SET_LOADING, SAVE_ZING_NEW_CONTENT } from "./contants";

export default function myListContentReducers(state = INIT_STATE, action) {
  return produce(state, (draf) => {
    switch (action.type) {
      case SET_LOADING:
        draf.isLoading = action.payload;
        break;
      case SAVE_ZING_NEW_CONTENT:
        draf.listZingNewContent = action.payload;
        break;
      default:
        return state;
    }
  });
}
