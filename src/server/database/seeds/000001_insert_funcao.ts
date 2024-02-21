import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';



export const seed = async (knex: Knex) => {
	const [{ count }] = await knex(ETableNames.funcao).count<[{ count: number }]>('* as count');
	if (!Number.isInteger(count) || Number(count) > 0) return;

	const funcaoToInsert = [{nome: 'vendedor'},{nome: 'entregador'},{nome: 'supervisor'},{nome: 'gerente'}];
	await knex(ETableNames.funcao).insert(funcaoToInsert);
};
