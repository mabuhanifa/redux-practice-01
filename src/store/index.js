import { createStore } from "redux";

const reducerFn = (state = {counter: 10}, action) => {
if (action.type === "INCREMENT") {
  return { counter: state.counter + 1 };
} else if (action.type === "DECREMENT") {
    return { counter: state.counter - 1 };
    }
return state;
};

const store = createStore(reducerFn);
export default store;