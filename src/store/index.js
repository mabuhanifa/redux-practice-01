import { createStore } from "redux";

const reducerFn = (state = {counter: 10}, action) => {
if (action.type === "INCREMENT") {
  return { counter: state.counter + 1 };
}
 if (action.type === "DECREMENT") {
    return { counter: state.counter - 1 };
    }
    if (action.type === "ADD_TEN") {
        return { counter: state.counter + action.payload };
        }
        if (action.type === "MIN_TEN") {
            return { counter: state.counter - action.payload };
            }
return state;
};

const store = createStore(reducerFn);
export default store;