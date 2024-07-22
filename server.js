const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const app = express();
const port = 3008;

const uri = 'mongodb+srv://admin:admin@cluster0.acc1is2.mongodb.net/task_db?retryWrites=true&w=majority&appName=Cluster0';;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch((error) => console.error('Error al conectar a MongoDB Atlas:', error.message));

app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
}));


app.use(express.json());


app.use('/', taskRoutes);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
