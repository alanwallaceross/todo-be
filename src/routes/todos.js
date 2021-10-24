import express from 'express';
import { todoPage } from '../controllers/index.js';

const todoRouter = express.Router();

todoRouter.get('/', todoPage);

export default todoRouter;
