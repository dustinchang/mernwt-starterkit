import {ADD_COMMENT, INCREMENT_LIKES} from "../actions/ActionTypes";

export default function mainReducer(state: any = {}, action: any): any {
  switch (action.type) {
    case ADD_COMMENT:
      console.log("in the add_comment reducer");
      console.log(state, action);
      return state;
    case INCREMENT_LIKES:
      console.log("in the increment_likes reducer");
      return state;
    default:
      return state;
  }
}
