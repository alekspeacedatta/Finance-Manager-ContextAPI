// import { createContext, useContext, useState, type ReactNode, useEffect } from "react"
// import { useTransactionsContext } from "./TransactionsContext"

// interface FinanceContext {
//     totalAmount: number
//     incomeAmount: number,
//     outComeAmount: number,
//     savings: number;
// }

// export const FinanceContext = createContext<FinanceContext | undefined>(undefined);
// export const FinanceProvider = ({children}: {children:ReactNode}) => {
//     const { transactions } = useTransactionsContext();
//     const [totalAmount, setTotalAmount] = useState(0);
//     const [incomeAmount, setIncomeAmount] = useState(0);
//     const [outComeAmount, setOutComeAmount] = useState(0);
//     const [savings, setOutComeSavings] = useState(0);

//     // useEffect(() => {
//         transactions.map(transaction => {
//             if(transaction.type === 'income'){
//                 setIncomeAmount(prev => prev + transaction.amount);
//             }
//         })

//         transactions.map(transaction => {
//             if(transaction.type === 'expense'){
//                 setOutComeAmount(prev => prev + transaction.amount);
//             }
//         })

//     }, [transactions])
//     return (
//         <FinanceContext.Provider value={{incomeAmount, outComeAmount, totalAmount, savings}}>
//             {children}
//         </FinanceContext.Provider>
//     )
// }
// export const useFinanceContext = () => {
//     const context = useContext(FinanceContext);
//     if (!context) throw new Error("useFinanceContext must be used within a FinanceProvider");
//     return context;
// };