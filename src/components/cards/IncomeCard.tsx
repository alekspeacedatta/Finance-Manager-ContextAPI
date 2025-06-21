import { useFinanceContext } from "../../context/useFinanceContext"
const IncomeCard = () => {
  const { incomeAmount } = useFinanceContext();
  return (
    <div className="stat-card income">
        <div className="stat-icon">📈</div>
        <div className="stat-info">
            <h3>შემოსავალი</h3>
            <span className="stat-amount" id="totalIncome"> {incomeAmount} ₾</span>
        </div>
    </div>
  )
}
export default IncomeCard
