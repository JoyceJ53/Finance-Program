
import { useState } from "react"
import "../../App.css";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useDeleteTransaction } from "../../hooks/useDeleteTransaction";


export const ExpenseTracker = () => {
    const { addTransaction } = useAddTransaction();
    const { transactions } = useGetTransactions();
    const [description, setDescription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactionType, setTransactionType] = useState("expense");
    const { deleteTransaction } = useDeleteTransaction();


    const onSubmit = async (e) => {
        e.preventDefault()
        addTransaction({description, transactionAmount, transactionType})
    }

    return (
        <>
        <div className="expense-tracker">
            <div className="container">                
                <h1 className="expense-title"> Expense Tracker</h1>
                <div className="balance">
                    <h3> Your Balance</h3>
                    <h2> $0.00</h2>
                </div>
                <div className="summary">
                    <div className="income">
                        <h4> Income</h4>
                        <p> $0.00</p>
                    </div>
                    <div className="expenses">
                        <h4> Expenses</h4>
                        <p> $0.00</p>
                    </div>
                    <form className="add-transaction" onSubmit={onSubmit}>
                        <h3 className="transaction-title">Add Transaction:</h3>
                        <input id ="description" type="text" placeholder="Description" required onChange={(e) => setDescription(e.target.value)}/>
                        <input id ="transaction-box" type="number" placeholder="Amount" required onChange={(e) => setTransactionAmount(e.target.value)}/>
                        <input type="radio" id="expense" value="expense"
                        checked= {transactionType === "expense"}
                        onChange={(e) => setTransactionType(e.target.value)}/>
                        <label className="expenses-radio"htmlFor="expenses"> Expense</label>
                        <input type="radio" id="income" value="income"
                        checked= {transactionType === "income"} 
                        onChange={(e) => setTransactionType(e.target.value)}/>
                        <label className="income-radio"htmlFor="income"> Income</label>

                        <button className="submit-button"type="submit"> Add Transaction</button>
                        
                    </form>
                </div>
            </div>
        </div>
        <div className = "transactions">
            <h3> Transactions</h3>
            <ul>
                {transactions.map((transaction) => {
                    const {id, description, transactionAmount, transactionType} = transaction;
                    return (
                        <li key={id}>
                            <h4> {description} </h4>
                            <p> 
                                {" "}
                                ${transactionAmount} . <label style={{color: transactionType === "expense" ? "red" : "green"}}> {transactionType}</label> 
                            </p>
                            <button onClick={() => deleteTransaction(id)}>Delete</button>
                        </li>
                    );
                })}
            </ul>
        </div>
        </>
    );
};