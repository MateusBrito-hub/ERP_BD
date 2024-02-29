import { Knex } from 'knex';


async function fetchEnumValues(knex: Knex, tableName: string) : Promise<string[]> {
	const result = await knex(tableName).pluck('nome');
	return result as string[];
}

export { fetchEnumValues };