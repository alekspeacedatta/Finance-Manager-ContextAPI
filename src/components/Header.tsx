import { useFinanceContext } from "../context/useFinanceContext";

const Header = () => {
    const { totalAmount } = useFinanceContext();

    return (
        <header className="header">
            <h1>💰 Personal Finance Tracker</h1>
            <div className="balance-display">
                <span className="balance-label">მთლიანი ბალანსი:</span>
                <span className="balance-amount" id="totalBalance">{totalAmount} ₾</span>
            </div>
        </header>
    );
};

export default Header;
