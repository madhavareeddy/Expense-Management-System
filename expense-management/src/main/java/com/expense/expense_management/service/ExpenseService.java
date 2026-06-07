package com.expense.expense_management.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.expense.expense_management.entity.Expense;
import com.expense.expense_management.repository.ExpenseRepository;

@Service
public class ExpenseService {

    private final ExpenseRepository repository;

    public ExpenseService(ExpenseRepository repository) {
        this.repository = repository;
    }

    public Expense saveExpense(Expense expense) {

        expense.setStatus("Draft");

        return repository.save(expense);
    }

    public List<Expense> getAllExpenses() {

        return repository.findAll();
    }

    public Expense updateStatus(Long id,
                                String status) {

        Expense expense =
                repository.findById(id)
                          .orElseThrow();

        expense.setStatus(status);

        return repository.save(expense);
    }

    // EDIT EXPENSE
    public Expense updateExpense(Long id,
                                 Expense updatedExpense) {
    	System.out.println("Received ID = " + id);


        Expense expense =
                repository.findById(id)
                          .orElseThrow(() -> new RuntimeException("Expense not found with id: " + id));
    	
        expense.setDate(updatedExpense.getDate());
        expense.setCategory(updatedExpense.getCategory());
        expense.setAmount(updatedExpense.getAmount());
        expense.setDescription(updatedExpense.getDescription());

        return repository.save(expense);
    }

    // DELETE EXPENSE
    public void deleteExpense(Long id) {

        repository.deleteById(id);
    }
}