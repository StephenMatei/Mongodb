// Create the 'users' collection
db.users.insertOne({
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main St",
    orders: []
  });
  
  // Create the 'products' collection
  db.products.insertOne({
    name: "Laptop",
    price: 1200,
    stock: 10
  });
  
  // Create the 'orders' collection
  db.orders.insertOne({
    userId: ObjectId("user_id"),
    products: [
      { productId: ObjectId("product_id"), quantity: 1 }
    ],
    total: 1200,
    status: "Pending"
  });
  
  // Indexing for performance
  db.books.createIndex({ author: 1 });
  