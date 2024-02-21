import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames';


export async function up(knex: Knex){
	return knex
		.schema
		.createTable(ETableNames.perfil, table => {
			table.bigIncrements().primary().index();
			table.string('nome').notNullable().index().unique();
			table.timestamps(true,true);

			table.comment('Tabela usada para armazenar informação de Perfil');
		});
}


export async function down(knex: Knex){
	return knex.schema.dropTable(ETableNames.perfil);
}

