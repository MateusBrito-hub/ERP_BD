import { Router } from 'express';
import { ClienteController} from '../controllers';

const router = Router();

router.get('/', 
	ClienteController.getAllValidation,
	ClienteController.getAll);
router.post('/', 
	ClienteController.createValidation,
	ClienteController.create);
router.get('/:id', 
	ClienteController.getByIdValidation,
	ClienteController.getById);
router.delete('/:id', 
	ClienteController.deleteByIdValidation,
	ClienteController.deteleById);
router.put('/:id', 
	ClienteController.updateByIdValidation,
	ClienteController.updateById);

export {router};