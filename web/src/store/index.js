import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { dopsReducer } from "./dopsReducer.js";
import { phpReducer } from "./phpReducer.js";
import { kitReducer } from "./kitReducer.js";
import { modalsReducer } from "./modalsReducer.js";
import { dopsInfoReducer } from "./dopsInfoReducer.js";

const rootReducer = combineReducers({
  modals: modalsReducer,
  dops: dopsReducer,
  kit: kitReducer,
  php: phpReducer,
  dopsInfo: dopsInfoReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());
