import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IFuncao } from '../../models';

export const updateById = async (id: number, funcao: Omit<IFuncao,'id'>) : Promise<void | Error> => {
	try {
		const result = await Knex(ETableNames.funcao)
			.update(funcao)
			.where('id', '=', id);
		if (result > 0) return;
		return new Error('Erro ao atualizar o registro');
	} catch (error) {
		console.log(error);
		return new Error('Erro ao atualizar o registro');
	}
};