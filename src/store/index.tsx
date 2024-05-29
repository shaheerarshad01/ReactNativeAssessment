// src/store/index.ts
import { legacy_createStore as createStore, combineReducers } from "redux";
import dataReducer from "./reducers/dataReducer";

const rootReducer = combineReducers({
  data: dataReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
