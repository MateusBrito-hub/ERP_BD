import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames';


export async function up(knex: Knex){
	return knex
		.schema
		.createTable(ETableNames.permissao, table => {
			table.bigIncrements('id').primary().index();
			table.string('nome').notNullable().index();
			table.boolean('habilitar_padrao').notNullable();
			table.string('modulo_grupo').notNullable();
			table.timestamps(true,true);

			table.comment('Tabela usada para armazenar informação de Permissoes');
		});
}


export async function down(knex: Knex){
	return knex.schema.dropTable(ETableNames.permissao);
}

