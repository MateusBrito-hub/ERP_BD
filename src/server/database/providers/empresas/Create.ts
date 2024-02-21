import { ETableNames } from '../../ETableNames';
import { IEmpresa } from '../../models';
import { Knex } from '../../knex';

export const create = async (empresa: Omit<IEmpresa, 'id'>): Promise<number | Error> => {
	try {
		const [result] = await Knex(ETableNames.empresa).insert(empresa).returning('id');
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

