import React, {useContext} from 'react';
import { GlobalContext } from '../context/globalState';

const Transaction =({transaction})=> {
    const {deleteTransactions}  = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus':'plus'}>
           {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={()=> deleteTransactions(transaction.id)}>x</button>
        </li>
    )
}

export default Transaction
