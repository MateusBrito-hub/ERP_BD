import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import { IFuncao } from '../../database/models';
import { FuncaoProvider } from '../../database/providers/funcao';

interface IParamsProps {
    id?: number,
}
interface IBodyProps extends Omit<IFuncao, 'id'> {}

export const updateByIdValidation = validation((getSchema) => ({
	body: getSchema<IBodyProps>(yup.object().shape({
		nome: yup.string().required(),
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

	const result = await FuncaoProvider.updateById(req.params.id, req.body);
	if (result instanceof Error){
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			errors:{
				default: result.message
			}
		});
	}

	return res.status(StatusCodes.NO_CONTENT).send();
};