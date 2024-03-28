import { ETableNames } from '../../ETableNames';
import { IFuncao } from '../../models';
import { Knex } from '../../knex';

export const create = async (funcao: Omit<IFuncao, 'id'>): Promise<number | Error> => {
	try {
		const [result] = await Knex(ETableNames.funcao).insert(funcao).returning('id');
		if (typeof result === 'object') {
			return result.id;
		} else if (typeof result === 'number') {
			return result;
		}
		return new Error('Error saving record');
	} catch (err) {
		return new Error('Error saving record');
	}
};

