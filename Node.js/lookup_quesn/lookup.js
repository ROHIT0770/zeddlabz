// Assume we have two collections: orders and customers

// Define the schema for the orders collection
const orderSchema = new Schema({
    customerId: { type: Schema.Types.ObjectId, ref: 'Customer' },
    amount: Number,
    // other fields
  });
  
  // Define the schema for the customers collection
  const customerSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    // other fields
  });
  
  // Create the models
  const Order = mongoose.model('Order', orderSchema);
  const Customer = mongoose.model('Customer', customerSchema);
  
  // Perform the aggregate lookup
  Order.aggregate([
    {
      $lookup: {
        from: 'customers',
        localField: 'customerId',
        foreignField: '_id',
        as: 'customer',
      },
    },
    {
      $unwind: '$customer',
    },
  ])
    .then((result) => {
      console.log('Lookup result:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  