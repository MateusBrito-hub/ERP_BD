import { ETableNames } from '../../ETableNames';
import { IPermissao } from '../../models';
import { Knex } from '../../knex';

export const create = async (permissao: Omit<IPermissao, 'id'>): Promise<number | Error> => {
	try {
		const [result] = await Knex(ETableNames.permissao).insert(permissao).returning('id');
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

