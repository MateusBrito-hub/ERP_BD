import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { EmpresaController } from '../controllers';


const router = Router();

router.post('/empresa', EmpresaController.createValidation, EmpresaController.create);

export {router};