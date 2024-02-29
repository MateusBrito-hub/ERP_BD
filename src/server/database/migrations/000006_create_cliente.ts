import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames';


export async function up(knex: Knex){
	return knex
		.schema
		.createTable(ETableNames.cliente, table => {
			table.bigIncrements('id').primary().index();
			table.integer('nome').notNullable().index();
			table.string('razao_social').notNullable().index();
			table.integer('cgc').notNullable();
			table.integer('rg');
			table.date('nasc_data');
			table.integer('contato').notNullable();
			table.string('email', 100);
			table.enu('tipo_contribuicao',['Contribuinte','Não Contribuinte', 'Isento' ]).notNullable();
			table.integer('inscricao_estadual');
			table.integer('inscricao_municipal');
			table .string('endereco').notNullable();
			table.integer('edereco_num').notNullable();
			table.string('complemento');
			table.integer('cep', 8).notNullable();
			table.string('bairro').notNullable();
			table.string('cidade').notNullable();
			table.string('uf').notNullable();
			table.string('pais').notNullable();
			table.bigInteger('vendedor_id').notNullable().references('id').inTable(ETableNames.funcionario).onUpdate('CASCADE').onDelete('RESTRICT');
			table.timestamps(true,true);

			table.comment('Tabela usada para armazenar informação de Função');
		});
}


export async function down(knex: Knex){
	return knex.schema.dropTable(ETableNames.cliente);
}

