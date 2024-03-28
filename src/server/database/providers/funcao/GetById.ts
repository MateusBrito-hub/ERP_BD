import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IFuncao } from '../../models';

export const getById = async (id: number) : Promise<IFuncao | Error> => {

	try {
		const result = await Knex(ETableNames.funcao)
			.select('*')
			.where('id', '=', id)
			.first();
		if (result) return result;
		return new Error('Erro ao consultar o registro');
	} catch (error) {
		console.log(error);
		return new Error('Erro ao consultar o registro');
	}
};