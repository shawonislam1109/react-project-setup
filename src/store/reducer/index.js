// third-party
import { combineReducers } from "redux";
import { api } from "../../api/apiConfig";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
});

export default reducers;
