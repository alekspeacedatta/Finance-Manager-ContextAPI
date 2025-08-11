import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useEffect,
} from 'react';
import { useTransactionsContext } from './TransactionsContext';

interface FinanceContext {
  totalAmount: number;
  incomeAmount: number;
  outComeAmount: number;
  savings: number;
}

export const FinanceContext = createContext<FinanceContext | undefined>(
  undefined
);
export const FinanceProvider = ({ children }: { children: ReactNode }) => {
  const { transactions } = useTransactionsContext();
  const [totalAmount, setTotalAmount] = useState(0);
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [outComeAmount, setOutComeAmount] = useState(0);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    let income = 0;
    let expense = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === 'income') {
        income += transaction.amount;
      } else if (transaction.type === 'expense') {
        expense += transaction.amount;
      }
    });
    setIncomeAmount(income);
    setOutComeAmount(expense);
    setTotalAmount(income - expense);
    setSavings(income * 0.2);
  }, [transactions]);
  return (
    <FinanceContext.Provider
      value={{ incomeAmount, outComeAmount, totalAmount, savings }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
export const useFinanceContext = () => {
  const context = useContext(FinanceContext);
  if (!context)
    throw new Error('useFinanceContext must be used within a FinanceProvider');
  return context;
};
