import type { TransactionType } from "../context/TransactionsContext"
import { useTransactionsContext } from "../context/TransactionsContext"
const TransactionItem = ({transaction} : { transaction: TransactionType } ) => {
    const { removeTransaction } = useTransactionsContext();
    return (
        <div className={`transaction-item ${transaction.type}`}>
            <div className="transaction-details">
                <div className="transaction-description">{transaction.description}</div>
                <div className="transaction-category">{transaction.category}</div>
            </div>
            <div className={`transaction-amount ${transaction.type}`}>
                ₾ {transaction.amount}
            </div>
            <button className="delete-btn" onClick={() => {removeTransaction(transaction.description)}} >წაშლა</button>
        </div>
    )
}
export default TransactionItem