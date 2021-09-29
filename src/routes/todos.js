import express from 'express';
import { testEnvironmentVariable } from '../settings.js';

const todoRouter = express.Router();

todoRouter.get('/todos', (req, res) =>
  res.status(200).json({ message: 'Todo Router', env: testEnvironmentVariable })
);

export default todoRouter;
