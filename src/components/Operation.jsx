import {useState} from "react";
import {deposit, withDraw} from "../actions/accountActions.js";
import {store} from "../configurStore/store.js";


const Operation = () => {
    const[sum, setSum] = useState(1);
    return (
        <div>
            <button onClick={() => store.dispatch(withDraw(sum))}>Withdraw</button>
            <input
                type={'number'}
                onChange={e => setSum(+e.target.value)}
                value={sum}
            />
            <button onClick={() => store.dispatch(deposit(sum))}>Deposit</button>
        </div>
    );
};

export default Operation;