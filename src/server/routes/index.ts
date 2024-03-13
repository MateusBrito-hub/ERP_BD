import { Router } from 'express';
import { EmpresaController } from '../controllers';


const router = Router();

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

export {router};