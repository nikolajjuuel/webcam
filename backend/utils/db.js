
import pg from 'pg';
import { dbParams } from '../database/db_params.js';

const { Client } = pg;

export const client = new Client(dbParams);
