import { createContext } from "react";
import { Store } from "../store";

interface State {
  store: Store;
}

const store = new Store();

const Context = createContext<State>({
  store
});

export { Context };
