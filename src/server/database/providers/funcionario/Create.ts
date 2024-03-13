import { ETableNames } from '../../ETableNames';
import { IFuncionario } from '../../models';
import { Knex } from '../../knex';

export const create = async (funcionario: Omit<IFuncionario, 'id'>): Promise<number | Error> => {
	try {
		const [result] = await Knex(ETableNames.funcionario).insert(funcionario).returning('id');
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

