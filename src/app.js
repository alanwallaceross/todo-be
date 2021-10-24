import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import todoRouter from './routes/todos.js';
import indexRouter from './routes/index.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/todos', todoRouter);

export default app;
