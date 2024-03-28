import { Router } from 'express';
import {router as ClienteRoutes} from './cliente';
import {router as EmpresaRoutes} from './empresa';
import {router as FuncionarioRoutes} from './funcionario';
import {router as FuncaoRoutes} from './funcao';

const router = Router();

router.use('/cliente', ClienteRoutes);
router.use('/empresa', EmpresaRoutes);
router.use('/funcao', FuncaoRoutes);
router.use('/funcionario', FuncionarioRoutes);

export {router};