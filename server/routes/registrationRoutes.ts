import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { registerUser } from '../controllers/registrationController';

const router = Router();

// Ensure the 'uploads' directory exists on the server, create it if missing
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Disk Storage instead of Memory Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Save target directory
  },
  filename: (req, file, cb) => {
    // Generate a unique filename using timestamp + original extension
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

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