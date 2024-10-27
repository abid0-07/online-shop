# Demo online-shop

In this project the front-end section is created with **HTML,CSS, Browser-side JavaScript**.  The back-end section is created with **Node.js, Express.js**. The database is created with **Mongo DB**.
There will two types of users. One is admin and other is customer.  Admin can add, delete, update products. Customer can view products, add to cart, checkout.

**MVC Pattern** is used in this project.

## Key Pages

For customer and admin both have signup and login page.
Customer will have all product, product details, shopping cart, all order for customers.
Admin will have dashboard, all products, add new products, delete product, update product, all order for admin.

## Data Entities (Models)

1. **User**: Email, password, isAdmin, name, address.
2. **Product**: Name, summary, Price, Image, description
3. **Cart**: Items, total price, number of items.
4. **Order**: User data, products/cart data, date, status
