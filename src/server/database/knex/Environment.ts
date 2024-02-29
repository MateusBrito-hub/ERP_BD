import { Knex } from 'knex';
import 'dotenv/config';
import path from 'path';


export const development: Knex.Config = {
	client: 'pg',
	connection: {
		host: 'db-postgresql-nyc3-48659-do-user-15313263-0.c.db.ondigitalocean.com',
		user: 'doadmin',
		database: 'erp',
		password: 'AVNS_ftXO8hycYFwSULXvO-t',
		port: 25060,
		ssl: { rejectUnauthorized:false },
	},
	migrations: {
		tableName: 'knex_migrations',
		directory: path.resolve(__dirname, '..', 'migrations')
	},
	seeds: {
		directory: path.resolve(__dirname, '..', 'seeds')
	}
};

export const test: Knex.Config = {
	...development,
	connection: ':memory:',
};

export const production: Knex.Config = {
	...development
};
