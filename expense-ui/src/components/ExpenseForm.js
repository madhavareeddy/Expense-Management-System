import React, { useState, useEffect } from "react";
import axios from "axios";

function ExpenseForm({
    selectedExpense,
    setSelectedExpense
}) {

    const [expense, setExpense] = useState({
        date: "",
        category: "",
        amount: "",
        description: "",
        status: "Draft"
    });

    useEffect(() => {

        if (selectedExpense) {

            setExpense({
                date: selectedExpense.date || "",
                category: selectedExpense.category || "",
                amount: selectedExpense.amount || "",
                description: selectedExpense.description || "",
                status: selectedExpense.status || "Draft"
            });

        } else {

            setExpense({
                date: "",
                category: "",
                amount: "",
                description: "",
                status: "Draft"
            });

        }

    }, [selectedExpense]);

    const saveExpense = async () => {

        try {

            if (selectedExpense) {

                await axios.put(
                    `http://localhost:8082/expenses/edit/${selectedExpense.id}`,
                    expense
                );

                alert("Expense Updated Successfully");

                setSelectedExpense(null);

            } else {

                await axios.post(
                    "http://localhost:8082/expenses",
                    {
                        ...expense,
                        status: "Draft"
                    }
                );

                alert("Expense Saved Successfully");
            }

            setExpense({
                date: "",
                category: "",
                amount: "",
                description: "",
                status: "Draft"
            });

        } catch (error) {

            console.error(error);

            alert("Error while saving expense");
        }
    };

    return (
        <div>

            <h2>
                {selectedExpense
                    ? "Edit Expense"
                    : "Add Expense"}
            </h2>

            <input
                type="date"
                value={expense.date}
                onChange={(e) =>
                    setExpense({
                        ...expense,
                        date: e.target.value
                    })
                }
            />

            <br /><br />

            <input
                type="text"
                placeholder="Category"
                value={expense.category}
                onChange={(e) =>
                    setExpense({
                        ...expense,
                        category: e.target.value
                    })
                }
            />

            <br /><br />

            <input
                type="number"
                placeholder="Amount"
                value={expense.amount}
                onChange={(e) =>
                    setExpense({
                        ...expense,
                        amount: e.target.value
                    })
                }
            />

            <br /><br />

            <textarea
                placeholder="Description"
                value={expense.description}
                onChange={(e) =>
                    setExpense({
                        ...expense,
                        description: e.target.value
                    })
                }
            />

            <br /><br />

            <button onClick={saveExpense}>
                {selectedExpense
                    ? "Update Expense"
                    : "Save Expense"}
            </button>

            {selectedExpense && (
                <>
                    {" "}
                    <button
                        onClick={() => {

                            setSelectedExpense(null);

                            setExpense({
                                date: "",
                                category: "",
                                amount: "",
                                description: "",
                                status: "Draft"
                            });
                        }}
                    >
                        Cancel
                    </button>
                </>
            )}

        </div>
    );
}

export default ExpenseForm;