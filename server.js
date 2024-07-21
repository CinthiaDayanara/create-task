const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const app = express();
const port = 3008;


mongoose.connect('mongodb://localhost:27017/task_db', {
    
});


app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
}));


app.use(express.json());


app.use('/', taskRoutes);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
