import {store} from "../configurStore/store.js";
import {useSyncExternalStore} from "react";


const Balance = () => {
    const {balance} = useSyncExternalStore(store.subscribe, store.getState)
    return (
        <div>
            <h1>Iron Bank of Braavos</h1>
            <h2>Balance = {balance}</h2>
            
        </div>
    );
};

export default Balance;