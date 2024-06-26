import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';

export const count = async (filter = '') : Promise<number | Error> => {

	try {
		const [{ count }] = await Knex(ETableNames.permissao)
			.where('nome','like', `%${filter}%`)
			.count<[{ count: number}]>('* as count');
		if (Number.isInteger(Number(count))) return Number(count); 
		return new Error('Erro ao consultar a quantidade total de registro');
	} catch (error) {
		return new Error('Erro ao consultar a quantidade total de registro');
	}
};