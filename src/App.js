import React from 'react';
import './App.css';
import Header from './components/Header';
import {Balance} from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
    <div >
      <Header/>
      <div className="container"><Balance></Balance></div>
      <IncomeExpenses></IncomeExpenses>
      <TransactionList></TransactionList>
      <AddTransaction></AddTransaction>
    </div>
    </GlobalProvider>
  );
}

export default App;
