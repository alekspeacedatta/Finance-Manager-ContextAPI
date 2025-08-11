import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Header from './components/Header';
import StatCards from './components/StatCards';
import { TransactionProvider } from './context/TransactionsContext';
import { FinanceProvider } from './context/useFinanceContext';
import './App.css';

function App() {
  return (
    <>
      <TransactionProvider>
        <FinanceProvider>
          <div className="container">
            <Header />
            <main className="main-content">
              <StatCards />
              <TransactionForm />
              <TransactionList />
            </main>
          </div>
        </FinanceProvider>
      </TransactionProvider>
    </>
  );
}

export default App;
