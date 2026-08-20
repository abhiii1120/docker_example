import express from 'express';
import morgan from 'morgan';
import indexRouter from './routes/index.routes.js';

let app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use('/api',indexRouter);

export default app;