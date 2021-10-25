import { Pool } from 'pg';
import dotenv from 'dotenv';
import { dbConnectionString } from '../settings';

dotenv.config();

export const pool = new Pool({ connectionString: dbConnectionString });
