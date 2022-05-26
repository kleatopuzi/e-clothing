import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middleWares = [logger];

if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleWares));
const persistor = persistStore(store);

export { store, persistor };
