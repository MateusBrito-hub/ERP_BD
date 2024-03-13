import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import { IFuncionario } from '../../database/models';
import { FuncionarioProvider } from '../../database/providers/funcionario';

interface IParamsProps {
    id?: number,
}
interface IBodyProps extends Omit<IFuncionario, 'id'> {}

export const updateByIdValidation = validation((getSchema) => ({
	body: getSchema<IBodyProps>(yup.object().shape({
		nome: yup.string().required(),
		senha: yup.string().required(),
		cpf: yup.number().integer().required(),
		rg: yup.number().integer().optional().default(0),
		email: yup.string().required().max(100),
		data_nasc: yup.number().integer().optional().default(0),
		observacao: yup.string().optional().default(''),
		comissao: yup.number().integer().optional().default(0),
		desconto_max: yup.number().integer().optional().default(0),
		endereco: yup.string().required(),
		endereco_num: yup.number().integer().required(),
		bairro: yup.string().required(),
		cidade: yup.string().required(),
		UF: yup.string().required(),
		CEP: yup.number().integer().required(),
		empresa_id: yup.number().integer().required(),
		perfil_id: yup.number().integer().required(),
		funcao_id: yup.number().integer().required(),
	})),
	params: getSchema<IParamsProps>(yup.object().shape({
		id: yup.number().integer().required().moreThan(0)
	}))
}));

export const updateById = async (req: Request<IParamsProps,{},IBodyProps>, res: Response) => {
	if(!req.params.id) return res.status(StatusCodes.BAD_REQUEST).json({
		errors: {
			default: 'O parâmetro "id" precisa ser informado'
		}
	});

	const result = await FuncionarioProvider.updateById(req.params.id, req.body);
	if (result instanceof Error){
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			errors:{
				default: result.message
			}
		});
	}

	return res.status(StatusCodes.NO_CONTENT).send();
};