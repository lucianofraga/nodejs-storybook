import express from "express";
import dotenv from "dotenv";
import connectDb from './config/db.js';
import morgan from "morgan";
import { engine } from 'express-handlebars';
import mainRouter from './routes/index.js';

// Loading the configuration
dotenv.config({ path: './config/config.env' });``

// Connecting to Mongodb
connectDb();

const app = express();
const PORT = process.env.PORT;

// Static folder
app.use(express.static('public'));

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// View engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

// Routes
app.use('/', mainRouter);


app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
