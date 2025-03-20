# MongoDB Setup and Operations

## Prerequisites
Ensure you have MongoDB installed and running locally or set up a free cluster on [MongoDB Atlas](https://www.mongodb.com/atlas/database).

## Installation and Setup

### Install MongoDB Locally
- **Linux (Ubuntu/Debian)**:
  ```sh
  sudo apt update
  sudo apt install -y mongodb
  sudo systemctl start mongodb
  sudo systemctl enable mongodb
  ```
- **Windows & Mac**: Download and install MongoDB from the [official website](https://www.mongodb.com/try/download/community).

### Start MongoDB Server
If running locally, ensure MongoDB is active:
```sh
mongod --version
```
If using MongoDB Atlas, obtain the connection string from the Atlas dashboard.

### Connect to MongoDB
Open a terminal and enter:
```sh
mongo
```
Or for Atlas:
```sh
mongo "your_connection_string"
```

## Required Scripts
The following scripts are essential for setting up and working with MongoDB:

### 1. Database Setup & CRUD Operations (`mongodb_library_setup.js`)
This script:
- Creates the `library` database and `books` collection.
- Inserts book records.
- Performs update and delete operations.

Run it using:
```sh
mongo < mongodb_library_setup.js
```

### 2. Query and Aggregation (`mongodb_queries.js`)
This script:
- Retrieves books based on different queries.
- Uses aggregation to analyze data.

Run it using:
```sh
mongo < mongodb_queries.js
```

### 3. E-Commerce Data Model (`ecommerce_model.js`)
This script:
- Defines `users`, `orders`, and `products` collections.
- Establishes relationships between collections.
- Creates an index for optimized queries.

Run it using:
```sh
mongo < ecommerce_model.js
```

## Submission
Push all scripts and `README.md` to your GitHub repository.

---

This guide ensures MongoDB is set up correctly, performs CRUD operations, models an e-commerce system, utilizes aggregation, and optimizes queries with indexing.
