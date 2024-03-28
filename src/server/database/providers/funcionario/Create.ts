import { ETableNames } from '../../ETableNames';
import { IFuncionario } from '../../models';
import { Knex } from '../../knex';

export const create = async (funcionario: Omit<IFuncionario, 'id'>): Promise<number | Error> => {
	try {
		const [{countCompany}] = await Knex(ETableNames.empresa)
			.where('id', 'like', funcionario.empresa_id)
			.count<[{ countCompany: number }]>('* as count');
		if (countCompany === 0) {
			return new Error('A empresa usada não foi cadastrada');
		}
		const [{countProfile}] = await Knex(ETableNames.perfil)
			.where('id', 'like', funcionario.perfil_id)
			.count<[{ countProfile: number }]>('* as count');
		if (countProfile === 0) {
			return new Error('O perfil usado não foi cadastrada');
		}
		const [{countFunction}] = await Knex(ETableNames.funcao)
			.where('id', 'like', funcionario.funcao_id)
			.count<[{ countFunction: number }]>('* as count');
		if (countFunction === 0) {
			return new Error('A função usada não foi cadastrada');
		}
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

