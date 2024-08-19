const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Import routes
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json());
app.use(cors());

const dbURI = process.env.MONGODB_URI;
// Connect to MongoDB
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Use task routes
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
