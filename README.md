# Expense Management System

## Overview

This project is a simplified Expense Management System developed as part of an assignment. The application allows users to create, edit, submit, approve, reject, and delete expense claims while following a basic reimbursement workflow.

## Features

### Expense Submission

* Add new expenses
* Fields:

  * Date
  * Category
  * Amount
  * Description
* Receipt upload option (UI available)

### Expense List

* View all submitted expenses
* Displays:

  * Date
  * Category
  * Amount
  * Status

### Workflow Management

The application supports the following statuses:

* Draft
* Submitted
* Approved
* Rejected

### Actions

* Edit Expense
* Submit Expense
* Approve Expense
* Reject Expense
* Delete Expense

### Validation

* Mandatory field validation
* Numeric amount validation
* Backend validation using Spring Boot

## Technology Stack

### Frontend

* React JS
* Axios
* HTML
* CSS
* JavaScript

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Hibernate

### Database

* MySQL

## Project Structure

expense-management/

├── frontend (React)

├── backend (Spring Boot)

├── database

└── README.md

## Setup Instructions

### Backend Setup

1. Clone the repository

```bash
git clone <repository-url>
```

2. Open the backend project in Eclipse or IntelliJ.

3. Configure MySQL database in application.properties

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/expense_db
spring.datasource.username=root
spring.datasource.password=your_password
```

4. Run the Spring Boot application.

Backend runs on:

```text
http://localhost:8082
```

### Frontend Setup

1. Navigate to frontend folder

```bash
cd frontend
```

2. Install dependencies

```bash
npm install
```

3. Start React application

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

## API Endpoints

### Get All Expenses

```http
GET /expenses
```

### Create Expense

```http
POST /expenses
```

### Update Expense

```http
PUT /expenses/edit/{id}
```

### Update Status

```http
PUT /expenses/status/{id}
```

### Delete Expense

```http
DELETE /expenses/{id}
```

## Future Enhancements

* Authentication and Authorization
* Receipt File Upload Storage
* Expense Reports
* Dashboard Analytics
* Email Notifications
* Role Based Access Control

## Author

Madhava Reddy

Email: [madhavgodi@gmail.com](mailto:madhavgodi@gmail.com)

LinkedIn:
https://www.linkedin.com/in/madhava-reddy-godi-90339b257

GitHub:
https://github.com/madhavareeddy
