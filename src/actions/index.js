// TODO: add and export your own actions
import cities from "../cities";
// should do api calls here to get data usually AJAX request ie fetch/get
export const SET_CITIES = "SET_CITIES";
export const ACTIVE_CITY = "ACTIVE_CITY"; // so the type is a const and not a string, this will give us better error handling

export function setCities() {
  return {
    type: SET_CITIES,
    Payload: cities, // return an array of cities, would return `data` in a fetch call
  };
}

export function activeCity(city) {
  return {
    type: ACTIVE_CITY,
    payload: city // returns the selected city
  };
}
