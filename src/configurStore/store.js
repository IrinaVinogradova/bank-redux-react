import {createStore} from "../redux/createStore.js";
import {accountReducer} from "../reducer/accountReduser.js";

const initialState = {
    balance: 0,

}
export const store = createStore(accountReducer, initialState);