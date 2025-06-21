import IncomeCard from "./cards/IncomeCard"
import SavingsCard from "./cards/SavingsCard"
import OutComeCard from "./cards/OutComeCard"

const StatCards = () => {
  return (
    <section className="stats-section">
        <IncomeCard/>
        <OutComeCard/>
        <SavingsCard/>
    </section>
  )
}
export default StatCards