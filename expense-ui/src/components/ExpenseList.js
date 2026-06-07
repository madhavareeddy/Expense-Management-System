import React, { useEffect, useState } from "react";
import axios from "axios";

function ExpenseList({ setSelectedExpense }) {

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        loadExpenses();
    }, []);

    const loadExpenses = async () => {

        const response = await axios.get(
            "http://localhost:8082/expenses"
        );

        setExpenses(response.data);
    };

    const deleteExpense = async (id) => {

        if (!window.confirm("Delete this expense?")) {
            return;
        }

        await axios.delete(
            `http://localhost:8082/expenses/${id}`
        );

        alert("Expense Deleted Successfully");

        loadExpenses();
    };

    const submitExpense = async (id) => {

        if (!window.confirm("Submit this expense?")) {
            return;
        }

        await axios.put(
            `http://localhost:8082/expenses/status/${id}`,
            {
                status: "Submitted"
            }
        );

        alert("Expense Submitted");

        loadExpenses();
    };

    const approveExpense = async (id) => {

        if (!window.confirm("Approve this expense?")) {
            return;
        }

        await axios.put(
            `http://localhost:8082/expenses/status/${id}`,
            {
                status: "Approved"
            }
        );

        alert("Expense Approved");

        loadExpenses();
    };

    const rejectExpense = async (id) => {

        if (!window.confirm("Reject this expense?")) {
            return;
        }

        await axios.put(
            `http://localhost:8082/expenses/status/${id}`,
            {
                status: "Rejected"
            }
        );

        alert("Expense Rejected");

        loadExpenses();
    };

    return (
        <div>

            <h2>Expense List</h2>

            <table border="1">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {expenses.map((expense) => (

                        <tr key={expense.id}>

                            <td>{expense.id}</td>
                            <td>{expense.date}</td>
                            <td>{expense.category}</td>
                            <td>{expense.amount}</td>
                            <td>{expense.status}</td>

                            <td>

                                {expense.status === "Draft" && (
                                    <>
                                        <button
                                            onClick={() =>
                                                setSelectedExpense(expense)
                                            }
                                        >
                                            Edit
                                        </button>

                                        {" "}

                                        <button
                                            onClick={() =>
                                                submitExpense(expense.id)
                                            }
                                        >
                                            Submit
                                        </button>
                                    </>
                                )}

                                {expense.status === "Submitted" && (
                                    <>
                                        <button
                                            onClick={() =>
                                                approveExpense(expense.id)
                                            }
                                        >
                                            Approve
                                        </button>

                                        {" "}

                                        <button
                                            onClick={() =>
                                                rejectExpense(expense.id)
                                            }
                                        >
                                            Reject
                                        </button>
                                    </>
                                )}

                                {" "}

                                <button
                                    onClick={() =>
                                        deleteExpense(expense.id)
                                    }
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default ExpenseList;