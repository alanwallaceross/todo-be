import { testEnvironmentVariable } from '../settings.js';

export const todoPage = (req, res) =>
  res.status(200).json({ message: testEnvironmentVariable });
