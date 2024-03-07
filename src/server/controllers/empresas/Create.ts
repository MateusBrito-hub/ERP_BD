import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { IEmpresa } from '../../database/models';
import { EmpresaProvider } from '../../database/providers/empresas';

interface IBodyProps extends Omit<IEmpresa, 'id'> { }

export const createValidation = validation((getSchema) => ({
	body: getSchema<IBodyProps>(yup.object().shape({
		unidade: yup.string().required(),
		nome_fantasia: yup.string().required(),
		razao_social: yup.string().required(),
		CGC: yup.number().required(),
		regime_tributario: yup.string().required(),
		inscricao_estadual: yup.number().required(),
		inscricao_estadual_ST: yup.number().required(),
		inscricao_municipal: yup.number().required(),
		email: yup.string().required(),
		contato: yup.number().required(),
		endereco: yup.string().required(),
		endereco_num: yup.number().required(),
		bairro: yup.string().required(),
		cidade: yup.string().required(),
		UF: yup.string().required(),
		CEP: yup.number().required()
	}))
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {

	const result = await EmpresaProvider.create(req.body);

	if (result instanceof Error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			errors: {
				default: result.message
			}
		});
	}

	return res.status(StatusCodes.CREATED).json(result);
};