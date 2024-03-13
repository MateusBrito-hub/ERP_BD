import { Router } from 'express';
import { EmpresaController, FuncionarioController } from '../controllers';


const router = Router();
// Company routes
router.get('/empresa', 
	EmpresaController.getAllValidation,
	EmpresaController.getAll);
router.post('/empresa', 
	EmpresaController.createValidation,
	EmpresaController.create);
router.get('/empresa/:id', 
	EmpresaController.getByIdValidation,
	EmpresaController.getById);
router.delete('/empresa/:id', 
	EmpresaController.deleteByIdValidation,
	EmpresaController.deteleById);
router.put('/empresa/:id', 
	EmpresaController.updateByIdValidation,
	EmpresaController.updateById);

// Employee routes
router.get('/funcionario', 
	FuncionarioController.getAllValidation,
	FuncionarioController.getAll);
router.post('/funcionario', 
	FuncionarioController.createValidation,
	FuncionarioController.create);
router.get('/funcionario/:id', 
	FuncionarioController.getByIdValidation,
	FuncionarioController.getById);
router.delete('/funcionario/:id', 
	FuncionarioController.deleteByIdValidation,
	FuncionarioController.deteleById);
router.put('/funcionario/:id', 
	FuncionarioController.updateByIdValidation,
	FuncionarioController.updateById);

export {router};