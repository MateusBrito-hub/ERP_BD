import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames';


export async function up(knex: Knex){
	return knex
		.schema
		.createTable(ETableNames.empresa, table => {
			table.bigIncrements('id').primary().index();
			table.string('unidade').notNullable().index().unique();
			table.string('nome_fantasia').notNullable().index();
			table.enu('regime_tributario',['Simples Nacional', 'MEI', 'Normal']).defaultTo('MEI');
			table.bigInteger('inscricao_estadual');
			table.bigInteger('inscricao_estadual_ST');
			table.bigInteger('inscricao_municipal');
			table.string('email', 100);
			table.integer('contato').notNullable();
			table.string('endereco').notNullable();
			table.string('endereco_num').notNullable();
			table.string('bairro').notNullable();
			table.string('cidade').notNullable();
			table.string('UF').notNullable();
			table.integer('CEP').notNullable();
			table.timestamps(true,true);

			table.comment('Tabela usada para armazenar informação de Empresa');
		});
}


export async function down(knex: Knex){
	return knex.schema.dropTable(ETableNames.empresa);
}

