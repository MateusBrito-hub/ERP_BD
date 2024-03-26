import { ETableNames } from '../../ETableNames';
import { ICliente } from '../../models';
import { Knex } from '../../knex';

export const create = async (cliente: Omit<ICliente, 'id'>): Promise<number | Error> => {
	try {
		const [result] = await Knex(ETableNames.cliente).insert(cliente).returning('id');
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

