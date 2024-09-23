import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  try {
    // Verificar que la URI se haya cargado correctamente
    console.log('MONGO_URI:', process.env.MONGO_URI);
    
    const options = {
        connectTimeoutMS: 10000,  // 10 segundos de tiempo de espera de conexión
        serverSelectionTimeoutMS: 10000,  // 10 segundos de tiempo de espera de selección del servidor
    };
    
    await mongoose.connect(process.env.MONGO_URI!, options);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
