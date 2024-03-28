import { Router } from 'express';
import { FuncaoController} from '../controllers';

const router = Router();

router.get('/', 
	FuncaoController.getAllValidation,
	FuncaoController.getAll);
router.post('/', 
	FuncaoController.createValidation,
	FuncaoController.create);
router.get('/:id', 
	FuncaoController.getByIdValidation,
	FuncaoController.getById);
router.delete('/:id', 
	FuncaoController.deleteByIdValidation,
	FuncaoController.deteleById);
router.put('/:id', 
	FuncaoController.updateByIdValidation,
	FuncaoController.updateById);

export {router};