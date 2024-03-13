import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import { IEmpresa } from '../../database/models';
import { EmpresaProvider } from '../../database/providers/empresas';

interface IParamsProps {
    id?: number,
}
interface IBodyProps extends Omit<IEmpresa, 'id'> {}

export const updateByIdValidation = validation((getSchema) => ({
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

    const result = await EmpresaProvider.updateById(req.params.id, req.body);
    if (result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default: result.message
            }
        });
    }

    return res.status(StatusCodes.NO_CONTENT).send();
};