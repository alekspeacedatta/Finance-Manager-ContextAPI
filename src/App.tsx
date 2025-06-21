import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import { TransactionProvider } from './hooks/TransactionsContext'
// import { FinanceProvider } from './hooks/useFinanceContext'
import './App.css'

function App() {

  return (
    <>
      <TransactionProvider>
        <div className='container'>
          {/* <Header/> */}
        </div>
        <main className='main-content'>
          {/* <StatCards/> */}
          <TransactionForm/>
          <TransactionList/>
        </main>
      </TransactionProvider>      
    </>
  )
}

export default App
