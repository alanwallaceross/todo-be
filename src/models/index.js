import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { dbConnectionString } from '../settings.js';
import todo from './todo.js';
import subtask from './subtask.js';

dotenv.config();

const sequelize = new Sequelize(dbConnectionString);

export async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todo = todo(sequelize, Sequelize);
db.subtask = subtask(sequelize, Sequelize);
