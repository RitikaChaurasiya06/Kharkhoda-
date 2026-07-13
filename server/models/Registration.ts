import mongoose, { Schema, Document } from 'mongoose';

export interface IRegistration extends Document {
  name: string;
  email: string;
  phone: string;
  aadhaarUrl: string;
  panUrl: string;
  paymentMethod: 'qr' | 'card' | 'bank_transfer'; // 'bank_transfer' ऐड किया
  paymentStatus: 'Pending' | 'Completed' | 'Failed';
  amount: number;
  createdAt: Date;
}

const RegistrationSchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, required: true },
  aadhaarUrl: { type: String, required: true },
  panUrl: { type: String, required: true },
  // enum में 'bank_transfer' जोड़ा ताकि वैलिडेशन फेल न हो
  paymentMethod: { type: String, enum: ['qr', 'card', 'bank_transfer'], required: true },
  paymentStatus: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
  amount: { type: Number, default: 31000 },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IRegistration>('Registration', RegistrationSchema);