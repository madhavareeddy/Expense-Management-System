package com.expense.expense_management.controller;

import com.expense.expense_management.dto.StatusRequest;
import com.expense.expense_management.entity.Expense;
import com.expense.expense_management.service.ExpenseService;

import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/expenses")
@CrossOrigin(origins = "http://localhost:3000")
public class ExpenseController {

    private final ExpenseService service;

    public ExpenseController(ExpenseService service) {
        this.service = service;
    }

    @PostMapping
    public Expense saveExpense(
            @Valid
            @RequestBody Expense expense) {

        return service.saveExpense(expense);
    }

    @GetMapping
    public List<Expense> getExpenses() {
        return service.getAllExpenses();
    }

    // STATUS UPDATE
    @PutMapping("/status/{id}")
    public Expense updateStatus(
            @PathVariable Long id,
            @RequestBody StatusRequest request) {

        return service.updateStatus(
                id,
                request.getStatus());
    }

    // EDIT EXPENSE
    @PutMapping("/edit/{id}")
    public Expense updateExpense(
            @PathVariable Long id,
            @RequestBody Expense expense) {

        return service.updateExpense(id, expense);
    }

    // DELETE EXPENSE
    @DeleteMapping("/{id}")
    public void deleteExpense(
            @PathVariable Long id) {

        service.deleteExpense(id);
    }
}