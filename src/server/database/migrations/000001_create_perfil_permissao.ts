import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames';


export async function up(knex: Knex){
	return knex
		.schema
		.createTable(ETableNames.perfil_permissao, table => {
			table.bigIncrements('id').primary().index();
			table.bigInteger('perfil_id').notNullable().references('id').inTable(ETableNames.perfil).onUpdate('CASCADE').onDelete('RESTRICT');
			table.bigInteger('permissao_id').notNullable().references('id').inTable(ETableNames.permissao).onUpdate('CASCADE').onDelete('RESTRICT');
			table.boolean('habilitado').notNullable;
			table.timestamps(true,true);

			table.comment('Tabela usada para armazenar informação de Perfil');
		});
}


export async function down(knex: Knex){
	return knex.schema.dropTable(ETableNames.perfil_permissao);
}

