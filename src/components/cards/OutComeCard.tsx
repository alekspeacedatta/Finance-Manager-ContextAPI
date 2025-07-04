import { useFinanceContext } from "../../context/useFinanceContext"
const OutComeCard = () => {
    const { outComeAmount } = useFinanceContext()
  return (
    <div className="stat-card expense">
        <div className="stat-icon">📉</div>
        <div className="stat-info">
            <h3>გასავალი</h3>
            <span className="stat-amount"> {outComeAmount} ₾</span>
        </div>
    </div>
  )
}
export default OutComeCard