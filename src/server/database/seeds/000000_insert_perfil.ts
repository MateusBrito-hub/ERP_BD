import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';



export const seed = async (knex: Knex) => {
	const [{ count }] = await knex(ETableNames.perfil).count<[{ count: number }]>('* as count');
	if (!Number.isInteger(count) || Number(count) > 0) return;

	const perfilToInsert = [{nome: 'administrador'},{nome: 'vendedor'},{nome: 'contador'}];
	await knex(ETableNames.perfil).insert(perfilToInsert);
};
