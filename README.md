# [Chic E-commerce Platform]

An eCommerce web application built with **Next.js** and **MongoDB**, and using **Next.js API**.

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/ollaanoor/Chic-Ecommerce-Platform.git
cd Chic
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file in the root directory

```env
MONGODB_URI=your_mongodb_connection_string
```

> Replace `your_mongodb_connection_string` with your MongoDB Atlas URI or local DB.

### 4. Run the app

```bash
npm run dev
```

---

## How to Test the API

### Using Postman

- Base URL: `http://localhost:3000`

#### Available API Endpoints:

| Method | Endpoint            | Description         |
| ------ | ------------------- | ------------------- |
| GET    | `/api/products`     | Fetch all products  |
| GET    | `/api/products/:id` | Fetch product by Id |
| POST   | `/api/products`     | Create a product    |
| PUT    | `/api/products/:id` | Update a product    |
| DELETE | `/api/products/:id` | Delete a product    |

## Key Features

- Cart state and functionality **managed using React Context**
- Cart state **persisted in localStorage**
- Product management via MongoDB (Mongoose)
- API routes handled directly via **Next.js API**
- Responsive UI with **Tailwind CSS**

---

## Architectural Decisions

### API Design

- Used **Next.js API Routes** to build backend endpoints inside `/pages/api`
- Each endpoint follows RESTful design for clarity and scalability

### State Management

- Used **React Context API** to manage global cart state
- Cart data is **persisted in `localStorage`**, ensuring items remain after page reload

### Database

- Used **MongoDB** for storing products
- Connected via `mongoose` for schema modeling

---

## Project Structure

```
/src
  /components   # Reusable UI components
    Header.tsx
    Footer.tsx
    Layout.tsx
    Loading.tsx
    ProductCard.tsx
    cartItemCard.tsx

  /pages    # Next.js Pages (Routes & API)
    /api
      /products # API Endpoints
    /product
      [id].tsx  # Dynamic product detail page based on product ID
    cart.tsx    # Cart page
    index.tsx   # Home page

  /context
    CartContext.tsx # Manages cart state globally, and syncing with localStorage

  /lib
    dbConnect.ts    # MongoDB connection setup using Mongoose

  /types    # TypeScript type definitions
    product.ts
    cartItem.ts

  /models   # Mongoose schema definition
    Product.ts
```
