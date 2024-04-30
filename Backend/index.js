const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoute.js');
const DbConnection = require('./Connection.js');
const { errorMiddleware } = require('./middleware/errorMiddleware.js');
const app = express();
require("express-async-errors");

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//validation middleware
app.use(errorMiddleware)

app.use('/api/v1/auth', authRoutes);

app.listen(8080, () => console.log('Express server is running on port 8080'));
