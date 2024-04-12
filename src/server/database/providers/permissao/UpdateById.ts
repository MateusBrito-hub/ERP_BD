import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IPermissao } from '../../models';

export const updateById = async (id: number, permissao: Omit<IPermissao,'id'>) : Promise<void | Error> => {
	try {
		const result = await Knex(ETableNames.permissao)
			.update(permissao)
			.where('id', '=', id);
		if (result > 0) return;
		return new Error('Erro ao atualizar o registro');
	} catch (error) {
		console.log(error);
		return new Error('Erro ao atualizar o registro');
	}
};