import { useFinanceContext } from "../../context/useFinanceContext"
const SavingsCard = () => {
    const { savings } = useFinanceContext();
  return (
    <div className="stat-card savings">
        <div className="stat-icon">🏦</div>
        <div className="stat-info">
            <h3>დაზოგვა</h3>
            <span className="stat-amount" id="totalSavings">  {savings} ₾ </span>
        </div>
    </div>
  )
}
export default SavingsCard