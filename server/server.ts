import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'; // Add this import
import { connectDB } from './config/db';
import registrationRoutes from './routes/registrationRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors({ origin: '*' })); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the uploads directory statically so URLs become accessible
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Endpoints
app.use('/api/v1', registrationRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});