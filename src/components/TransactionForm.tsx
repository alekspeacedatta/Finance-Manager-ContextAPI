import { useTransactionsContext } from '../context/TransactionsContext';
import { useState } from 'react';
import React from 'react';
const TransactionForm = () => {
  const { addTransaction } = useTransactionsContext();
  const [transaction, setTransaction] = useState({
    description: '',
    amount: 0,
    category: '',
    type: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTransaction((prev) => ({
      ...prev,
      [name]: name === 'amount' ? parseFloat(value) : value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTransaction(transaction);
    setTransaction({
      description: '',
      amount: 0,
      category: '',
      type: '',
    });
  };
  return (
    <section className="add-transaction">
      <h2>ახალი ტრანზაქცია</h2>
      <form onSubmit={handleSubmit} className="transaction-form">
        <div className="form-group">
          <label>აღწერა:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={transaction.description}
            onChange={handleChange}
            placeholder="ტრანზაქციის აღწერა"
            required
          />
        </div>
        <div className="form-group">
          <label>თანხა:</label>
          <input
            type="number"
            name="amount"
            value={transaction.amount}
            onChange={handleChange}
            placeholder="0.00"
            step="0.01"
            required
          />
        </div>
        <div className="form-group">
          <label>კატეგორია:</label>
          <select
            name="category"
            value={transaction.category}
            onChange={handleChange}
            required
          >
            <option value="">კატეგორია აირჩიეთ</option>
            <option value="საკვები">საკვები</option>
            <option value="ტრანსპორტი">ტრანსპორტი</option>
            <option value="გართობა">გართობა</option>
            <option value="კომუნალური">კომუნალური</option>
            <option value="ხელფასი">ხელფასი</option>
            <option value="ფრილანსი">ფრილანსი</option>
            <option value="სხვა">სხვა</option>
          </select>
        </div>
        <div className="form-group">
          <label>ტიპი:</label>
          <select
            name="type"
            value={transaction.type}
            onChange={handleChange}
            required
          >
            <option value="">ტიპი აირჩიეთ</option>
            <option value="income">შემოსავალი</option>
            <option value="expense">გასავალი</option>
          </select>
        </div>
        <button type="submit" className="add-btn">
          დამატება
        </button>
      </form>
    </section>
  );
};
export default TransactionForm;
