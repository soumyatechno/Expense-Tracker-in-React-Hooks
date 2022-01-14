
import './App.css';
import AddExpenses from './Components/AddExpenses';
import Balance from './Components/Balance';
import Header from './Components/Header';
import IncomeExpense from './Components/IncomeExpense';
import TransactionList from './Components/TransactionList';
import { GlobalProvider } from './context/globalState';

function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className='container'>
     <Balance/>
     <IncomeExpense/>
     <TransactionList/>
     <AddExpenses/>
     </div>
     
    </GlobalProvider>
  );
}

export default App;
