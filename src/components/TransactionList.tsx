import { useTransactionsContext } from "../context/TransactionsContext"
import TransactionItem from "./TransactionItem";
const TransactionList = () => {
    const { transactions, removeAllTransactions } = useTransactionsContext();
    return (
        <section className="transactions-section">
                <div className="transactions-header">
                    <h2>ტრანზაქციების ისტორია</h2>
                    <div className="filters">
                        <select id="filterType" className="filter-select">
                            <option value="all">ყველა</option>
                            <option value="income">შემოსავალი</option>
                            <option value="expense">გასავალი</option>
                        </select>
                        <button id="clearAll" onClick={removeAllTransactions} className="clear-btn">ყველას წაშლა</button>
                    </div>
                </div>
                <div className="transactions-list" id="transactionsList">
                    {transactions.map((transaction, index)=> (
                        <TransactionItem key={index} transaction={transaction}/>
                    ))}
                </div>
        </section>  
    )
}
export default TransactionList