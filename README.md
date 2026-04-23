# MediStore 💊

**Your Trusted Online Medicine Shop**

---

## 📌 Overview

MediStore is a full-stack e-commerce web application for purchasing over-the-counter (OTC) medicines. It supports three roles—Customer, Seller, and Admin—each with distinct permissions to ensure smooth platform operation.

---

---
## 🟢 Live Site -> https://online-medical-shop-frontend.vercel.app/home
---

## 🚀 Project Setup (Step-by-Step)

### 1. Clone the Repository

```bash
git clone https://github.com/Rahima-Akter/online-medical-shop
cd online-medical-shop
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and configure required variables (example):

```env
DATABASE_URL=
AUTH_SECRET=
NEXT_PUBLIC_API_URL=
```

### 4. Run Development Server

```bash
npm run dev
```

App will be available at:

```
http://localhost:3000
```

### 5. Build for Production

```bash
npm run build
npm start
```

---

## 🎡 Folder Structure

        +---app
        |   +---(auth)
        |   |   +---login
        |   |   \---register
        |   +---(commonLayout)
        |   |   +---home
        |   |   \---shop
        |   |       +---checkout
        |   |       \---[id]
        |   +---(dashboardLaout)
        |   |   +---@admin
        |   |   |   +---admin-dashboard
        |   |   |   +---category
        |   |   |   +---inventory
        |   |   |   +---manage-users
        |   |   |   |   \---[id]
        |   |   |   \---orders
        |   |   |       \---[id]
        |   |   +---@customer
        |   |   |   +---cart
        |   |   |   +---dashboard
        |   |   |   \---my-orders
        |   |   |       \---[id]
        |   |   \---@seller
        |   |       +---add-medicine
        |   |       +---medicine-management
        |   |       |   \---[id]
        |   |       |       \---edit-medicine
        |   |       +---order-management
        |   |       |   \---[id]
        |   |       \---seller-dashboard
        |   +---api
        |   |   +---auth
        |   |   |   \---[...all]
        |   |   \---logout
        |   \---profile
        +---components
        |   +---actions
        |   +---dashboard
        |   |   +---admin
        |   |   |   +---orders
        |   |   |   \---users
        |   |   +---customer
        |   |   |   +---cart
        |   |   |   \---orders
        |   |   +---seller
        |   |   |   +---medicineIntevtory
        |   |   |   \---orders
        |   |   \---shared
        |   +---modules
        |   |   +---auth
        |   |   +---home
        |   |   \---shop
        |   |       +---allProducts
        |   |       +---checkout
        |   |       \---productDetails
        |   |           \---client
        |   +---shared
        |   \---ui
        +---lib
        +---roles
        +---routes
        +---services
        \---types

---


---

## 🧩 Tech Stack

* **Frontend:** Next.js 16, React 19, Tailwind CSS, MUI
* **Authentication:** better-auth
* **Form Handling:** React Hook Form

---

## 👥 Roles & Permissions

### Customer

* Browse medicines
* Add to cart
* Place orders
* Track orders
* Leave reviews

### Seller

* Manage medicines (CRUD)
* Update stock
* View and process orders

### Admin

* Manage users (ban/unban)
* Manage medicines & categories
* Monitor all orders

---

## 🌐 Application Routes

### Public Routes

| Route       | Description      |
| ----------- | ---------------- |
| `/`         | Home page        |
| `/shop`     | Browse medicines |
| `/shop/:id` | Medicine details |
| `/login`    | Login page       |
| `/register` | Register page    |

### Customer Routes (Private)

| Route             | Description     |
| ----------------  | -------------   |
| `/dashboard`      | User dashboard  |
| `/cart`           | View cart       |
| `/shop/checkout`  | Checkout page   |
| `/my-orders`      | Order history   |
| `/profile`        | profile         |

### Seller Routes (Private)

| Route                     | Description      |
| ------------------------  | ---------------- |
| `/seller-dashboard`       | Seller dashboard |
| `/add-medicine`           |  Add medicine    |
| `/medicine-management`    | Manage inventory |
| `/order-management`       | Manage orders    |

### Admin Routes (Private)

| Route               | Description       |
| ------------------- | ----------------- |
| `/admin-dashboard`  | Admin dashboard   |
| `/category`         | Manage categories |
| `/inventory`        | Manage inventory  |
| `/manage-users`     | Manage users      |
| `/orders`           | View all orders   |

---


### Tables Overview

* **Users** → Stores user info and roles
* **Categories** → Medicine categories
* **Medicines** → Product inventory (linked to seller)
* **Orders** → Order details and status
* **Reviews** → Customer feedback

---

## 🔄 Application Flow

### Customer Journey

1. Register/Login
2. Browse medicines
3. Add items to cart
4. Checkout
5. Track order

### Seller Journey

1. Register/Login
2. Add medicines
3. Manage inventory
4. View orders
5. Update order status

---

## 📦 Order Status Lifecycle

```
PLACED → PROCESSING → SHIPPED → DELIVERED → CANCELLED
          
```

---

## ⚙️ Key Features

### Public

* Browse and search medicines
* Filter by category, price, manufacturer

### Customer

* Cart & checkout
* Order tracking
* Reviews

### Seller

* Inventory management
* Order handling

### Admin

* User control
* Category management
* Full platform oversight

---

## 📄 License

This project is private and intended for educational or internal use.

---

## ✍️ Author

Rahima Akter