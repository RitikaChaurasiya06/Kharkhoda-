import express from 'express';
import multer from 'multer';
import { registerUser } from '../controllers/registrationController';

const router = express.Router();
const upload = multer(); // Ya aapka custom diskStorage config

const uploadFields = upload.fields([
  { name: 'aadhaarUrl', maxCount: 1 },
  { name: 'panUrl', maxCount: 1 }
]);

router.post('/register', uploadFields, registerUser);

export default router;