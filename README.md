# MySQL Relational Table Project

This project demonstrates how to create and manage a relational table in MySQL, where users can be added, updated, and managed using **UUIDs** as unique identifiers.

## 🚀 Features
- Use of **UUID** for unique user identification
- CRUD operations: **Add, Update, Retrieve, and Delete users**
- MySQL relational table structure
- Secure and scalable approach to managing user data

## 🛠️ Installation

1. **Install MySQL** (if not already installed):
   - Download MySQL: [MySQL Downloads](https://dev.mysql.com/downloads/)
   
2. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/mysql-user-management.git
   ```

3. **Navigate to the project directory:**
   ```sh
   cd mysql-user-management
   ```

4. **Import the database schema:**
   ```sh
   mysql -u your_username -p your_database < schema.sql
   ```

## 📌 Database Schema

```sql
CREATE TABLE users (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);
```

## 🔧 CRUD Operations

### ➕ Add a New User
```sql
INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');
```

### 📝 Update a User's Name or Email
```sql
UPDATE users SET name = 'Jane Doe', email = 'jane@example.com' WHERE id = 'your-uuid';
```

### 🔍 Retrieve All Users
```sql
SELECT * FROM users;
```

### ❌ Delete a User
```sql
DELETE FROM users WHERE id = 'your-uuid';

