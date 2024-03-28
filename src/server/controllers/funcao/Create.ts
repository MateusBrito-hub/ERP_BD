import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { IFuncao } from '../../database/models';
import { FuncaoProvider } from '../../database/providers/funcao';

interface IBodyProps extends Omit<IFuncao, 'id'> { }

export const createValidation = validation((getSchema) => ({
	body: getSchema<IBodyProps>(yup.object().shape({
		nome: yup.string().required(),
	}))
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {

	const result = await FuncaoProvider.create(req.body);

	if (result instanceof Error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			errors: {
				default: result.message
			}
		});
	}

	return res.status(StatusCodes.CREATED).json(result);
};