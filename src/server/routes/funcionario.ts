import { Router } from 'express';
import { FuncionarioController} from '../controllers';

const router = Router();

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