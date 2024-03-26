import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import { ICliente } from '../../database/models';
import { ClienteProvider } from '../../database/providers/cliente';

interface IParamsProps {
    id?: number,
}
interface IBodyProps extends Omit<ICliente, 'id'> {}

export const updateByIdValidation = validation((getSchema) => ({
	body: getSchema<IBodyProps>(yup.object().shape({
		nome: yup.string().required(),
		razao_social: yup.string().required(),
		cgc: yup.number().required(),
		rg: yup.number().optional(),
		nasc_data: yup.number().optional(),
		contato: yup.number().required(),
		email: yup.string().required(),
		tipo_contribuicao: yup.number().required(),
		inscricao_estadual: yup.number().required(),
		inscricao_municipal: yup.number().required(),
		endereco: yup.string().required(),
		endereco_num: yup.number().optional().default(0),
		complemento: yup.string().optional().default(''),
		cep: yup.number().required(),
		bairro: yup.string().required(),
		cidade: yup.string().required(),
		uf: yup.string().required(),
		pais: yup.string().required(),
		vendedor_id: yup.number().required()
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

	const result = await ClienteProvider.updateById(req.params.id, req.body);
	if (result instanceof Error){
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			errors:{
				default: result.message
			}
		});
	}

	return res.status(StatusCodes.NO_CONTENT).send();
};