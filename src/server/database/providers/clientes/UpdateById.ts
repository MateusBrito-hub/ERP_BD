import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICliente } from '../../models';

export const updateById = async (id: number, cliente: Omit<ICliente,'id'>) : Promise<void | Error> => {
	try {
		const [{countCompany}] = await Knex(ETableNames.funcionario)
			.where('id', 'like', cliente.vendedor_id)
			.count<[{ countCompany: number }]>('* as count');
		if (countCompany === 0) {
			return new Error('O vendedor usado não foi cadastrada');
		}
		const result = await Knex(ETableNames.cliente)
			.update(cliente)
			.where('id', '=', id);
		if (result > 0) return;
		return new Error('Erro ao atualizar o registro');
	} catch (error) {
		console.log(error);
		return new Error('Erro ao atualizar o registro');
	}
};