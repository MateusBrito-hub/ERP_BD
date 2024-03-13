import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import { EmpresaProvider } from '../../database/providers/empresas';

interface IParamsProps {
    id?: number,
}

export const getByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    }))
}));

export const getById = async (req: Request<IParamsProps>, res: Response) => {
    if(!req.params.id) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
            default: 'O parâmetro "id" precisa ser informado'
        }
    });

    const result = await EmpresaProvider.getById(Number(req.params.id));
    
    if (result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default: result.message
            }
        });
    }
    return res.status(StatusCodes.OK).json(result);
};