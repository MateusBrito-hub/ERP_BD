import { Router } from 'express';
import { FuncionarioController} from '../controllers';

const router = Router();

router.get('/', 
	FuncionarioController.getAllValidation,
	FuncionarioController.getAll);
router.post('/', 
	FuncionarioController.createValidation,
	FuncionarioController.create);
router.get('/:id', 
	FuncionarioController.getByIdValidation,
	FuncionarioController.getById);
router.delete('/:id', 
	FuncionarioController.deleteByIdValidation,
	FuncionarioController.deteleById);
router.put('/:id', 
	FuncionarioController.updateByIdValidation,
	FuncionarioController.updateById);

export {router};