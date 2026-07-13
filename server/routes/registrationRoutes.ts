import { Router } from 'express';
import multer from 'multer';
import { registerUser } from '../controllers/registrationController';

const router = Router();

// Keep files purely in RAM memory buffers
const storage = multer.memoryStorage(); 

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB Limit
});

const uploadFields = upload.fields([
  { name: 'aadhaarUrl', maxCount: 1 },
  { name: 'panUrl', maxCount: 1 }
]);

router.post('/register', uploadFields, registerUser);

export default router;