import dotenv from 'dotenv';

dotenv.config();
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const dbConnectionString = process.env.DB_CONNECTION_STRING;
