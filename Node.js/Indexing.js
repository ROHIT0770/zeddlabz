const mongoose = require('mongoose');

// Define your schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  age: Number
});

// Add indexes to the schema
userSchema.index({ name: 1 });
userSchema.index({ age: -1 });

// Create a model from the schema
const User = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // Create indexes
    User.init().then(() => {
      console.log('Indexes created');
      // You can start working with the User model here
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
