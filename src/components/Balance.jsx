import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {
  const{transactions}=useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount);
  console.log(typeof(amounts));
  console.log(Array.isArray(amounts));

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  console.log(total);
  console.dir(transactions)

  return (
    <><h4>Your Balance</h4>
      <h1 id="balance">{"\u20B9"}{total}</h1></>
  )
}
