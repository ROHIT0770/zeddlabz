// Define the schema for the main document
const userSchema = new Schema({
    name: String,
  });
  
  // Define the schema for the referenced document
  const postSchema = new Schema({
    title: String,
    content: String,
  });
  
  // Create the models
  const User = mongoose.model('User', userSchema);
  const Post = mongoose.model('Post', postSchema);
  
  // Populate the array field with referenced documents
  User.findOne({ name: 'John' })
    .populate('posts')
    .exec((err, user) => {
      if (err) {
        console.error('Error:', err);
        return;
      }
  
      console.log('User:', user);
    });
  