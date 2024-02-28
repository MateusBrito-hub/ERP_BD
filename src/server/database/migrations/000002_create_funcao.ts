import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames';


export async function up(knex: Knex){
	return knex
		.schema
		.createTable(ETableNames.funcao, table => {
			table.bigIncrements('id').primary().index();
			table.string('nome').notNullable().index().unique();
			table.timestamps(true,true);

			table.comment('Tabela usada para armazenar informação de Função');
		});
}


export async function down(knex: Knex){
	return knex.schema.dropTable(ETableNames.funcao);
}

