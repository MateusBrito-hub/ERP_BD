import { Router } from 'express';
import {router as EmpresaRoutes} from './empresa';
import {router as FuncionarioRoutes} from './funcionario';

const router = Router();

router.use('/empresa', EmpresaRoutes)
router.use('/funcionario', FuncionarioRoutes)

export {router};