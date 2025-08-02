const mongoose = require("mongoose");

//  Connect to MongoDB
mongoose.connect(
  "mongodb+srv://catherineshajuk:user@cluster0.lk7ze0r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));
