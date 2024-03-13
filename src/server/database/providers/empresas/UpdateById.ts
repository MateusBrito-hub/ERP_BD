import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IEmpresa } from '../../models';

export const updateById = async (id: number, company: Omit<IEmpresa,'id'>) : Promise<void | Error> => {
	try {
		const result = await Knex(ETableNames.empresa)
			.update(company)
			.where('id', '=', id);
		if (result > 0) return;
		return new Error('Erro ao atualizar o registro');
	} catch (error) {
		console.log(error);
		return new Error('Erro ao atualizar o registro');
	}
};