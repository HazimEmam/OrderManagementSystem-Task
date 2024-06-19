# OrderManagementSystem-Task

This project is a simple Order Management System API built with NestJS and Prisma. It allows users to manage their carts and orders.

## Setup

### Prerequisites

- Nest.js
- PostgreSQL

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/HazimEmam/OrderManagementSystem-Task.git
    cd OrderManagementSystem-Task
    ```

2. Install dependencies:
    ```bash
    npm install Or yarn install
    ```

3. Set up the database:

    - Create a `.env` file in the root of your project and add the following:
        ```plaintext
        DATABASE_URL="postgresql://user:password@localhost:5432/database"
        ```
    - Initialize Prisma:
        ```bash
        npx prisma migrate dev --name init
        npx prisma generate
        ```

### Running the Application

1. Start the application:
    ```bash
    npm run start Or yarn start:dev
    ```

2. Open your browser and navigate to `https://bitly.cx/WQj0` to view Postman documentation.

### API Endpoints

#### Cart

- **Add to Cart**
    - **Endpoint:** `POST /api/cart/add`
    - **Description:** Adds a product to the user's cart or updates the quantity if the product is already in the cart.
    - **Request Body:**
        ```json
        {
          "userId": 1,
          "productId": 1,
          "quantity": 2
        }
        ```

- **View Cart**
    - **Endpoint:** `GET /api/cart/`
    - **Description:** Retrieves the user's cart.
    - **Query Parameters:**
        - `userId`: The ID of the user

- **Update Cart**
    - **Endpoint:** `PUT /api/cart/update`
    - **Description:** Updates the quantity of a product in the cart.
    - **Request Body:**
        ```json
        {
          "userId": 1,
          "productId": 1,
          "quantity": 3
        }
        ```

- **Remove From Cart**
    - **Endpoint:** `DELETE /api/cart/remove`
    - **Description:** Removes a product from the cart.
    - **Query Parameters:**
        - `userId`: The ID of the user
        - `productId`: The ID of the product

#### Orders

- **Create Order**
    - **Endpoint:** `POST /api/orders`
    - **Description:** Creates a new order for the specified user with the products in their cart.
    - **Request Body:**
        ```json
        {
          "userId": 1
        }
        ```

- **Get Order by ID**
    - **Endpoint:** `GET /api/orders/`
    - **Description:** Retrieves the order details by order ID.
    - **Query Parameters:**
        - `orderId`: The ID of the order

- **Update Order Status**
    - **Endpoint:** `PUT /api/orders/status`
    - **Description:** Updates the status of an order.
    - **Request Body:**
        ```json
        {
          "orderId": 1,
          "status": "Shipped"
        }
        ```
#### Users

- **Create User**
    - **Endpoint:** `POST /api/users`
    - **Description:** Creates a new user.
    - **Request Body:**
        ```json
        {
          "name": "John Doe",
          "email": "john.doe@example.com",
          "password": "password123",
          "address": "123 Main St"
        }
        ```

- **Get User by ID**
    - **Endpoint:** `GET /api/users/:id`
    - **Description:** Retrieves a user by ID.
    - **Path Parameters:**
        - `id`: The ID of the user

#### Products

- **Add Product**
    - **Endpoint:** `POST /api/products`
    - **Description:** Adds a new product.
    - **Request Body:**
        ```json
        {
          "name": "Product Name",
          "description": "Product Description",
          "price": 19.99,
          "stock": 100
        }
        ```
