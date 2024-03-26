import { Router } from 'express';
import {router as EmpresaRoutes} from './empresa';
import {router as FuncionarioRoutes} from './funcionario';
import {router as ClienteRoutes} from './cliente';

const router = Router();

router.use('/empresa', EmpresaRoutes);
router.use('/funcionario', FuncionarioRoutes);
router.use('/cliente', ClienteRoutes);

export {router};