import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IFuncionario } from '../../models';

export const updateById = async (id: number, funcionario: Omit<IFuncionario,'id'>) : Promise<void | Error> => {
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
		const result = await Knex(ETableNames.funcionario)
			.update(funcionario)
			.where('id', '=', id);
		if (result > 0) return;
		return new Error('Erro ao atualizar o registro');
	} catch (error) {
		console.log(error);
		return new Error('Erro ao atualizar o registro');
	}
};