import { createContext, useState, useContext, type ReactNode } from 'react';
// addTransaction
// deleteTransaction
// removeAllTransaction

// transaction: descrtioptio, amount, category, type;
// es monacemebi unda iyos gavrcelebuli sam componentshi
// TransactionForm, TransactionList, TransactionItemShi
// export type Type = 'income' | 'expense'
export type TransactionType = {
  description: string;
  amount: number;
  category: string;
  type: string;
};
interface TransactionsContextType {
  transactions: TransactionType[];
  addTransaction: (transaction: TransactionType) => void;
  removeAllTransactions: () => void;
  removeTransaction: (description: string) => void;
}
export const TransactionContext = createContext<
  TransactionsContextType | undefined
>(undefined);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const addTransaction = (transaction: TransactionType) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };
  const removeTransaction = (description: string) => {
    setTransactions((prev) =>
      prev.filter((item) => item.description !== description)
    );
  };
  const removeAllTransactions = () => {
    setTransactions([]);
  };
  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        removeTransaction,
        removeAllTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
export const useTransactionsContext = () => {
  const context = useContext(TransactionContext);
  if (!context) throw new Error('rererer');

  return context;
};
