
import {accountReducer} from "../reducer/accountReduser.js";
import {legacy_createStore as createStore} from "redux";

const initialState = {
    balance: 0,
    quote: 'Winter is coming...'

}
export const store = createStore(accountReducer, initialState);