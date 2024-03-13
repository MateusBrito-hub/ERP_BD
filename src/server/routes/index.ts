import { Router } from 'express';
import { EmpresaController } from '../controllers';


const router = Router();

router.post('/empresa', 
    EmpresaController.createValidation, 
    EmpresaController.create);

export {router};