import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames';


export async function up(knex: Knex){
	return knex
		.schema
		.createTable(ETableNames.funcionario, table => {
			table.bigIncrements('id').primary().index();
			table.string('nome').notNullable().index();
			table.string('senha').notNullable().index();
			table.integer('cpf').notNullable();
			table.integer('rg');
			table.string('email', 100);
			table.integer('data_nasc');
			table.text('observacao');
			table.integer('comissao').defaultTo(0);
			table.integer('desconto_max').defaultTo(0);
			table.string('endereco').notNullable();
			table.string('endereco_num').notNullable();
			table.string('bairro').notNullable();
			table.string('cidade').notNullable();
			table.string('UF').notNullable();
			table.integer('CEP').notNullable();
			table.bigInteger('empresa_id').index().notNullable().references('id').inTable(ETableNames.empresa).onUpdate('CASCADE').onDelete('RESTRICT');
			table.timestamps(true,true);

			table.comment('Tabela usada para armazenar informação de Empresa');
		});
}


export async function down(knex: Knex){
	return knex.schema.dropTable(ETableNames.funcionario);
}

