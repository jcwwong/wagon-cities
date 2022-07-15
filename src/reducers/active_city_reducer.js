import { ACTIVE_CITY } from "../actions"; // importing the constant which is a string type

export default function (state, action) {
  if (state === undefined) {
    return null;
  }
  switch (action.type) {
    case ACTIVE_CITY: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
