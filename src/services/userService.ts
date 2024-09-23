import { User } from '../models/userModel';
import bcrypt from 'bcrypt';

export const createUser = async (userData: any) => {
    try {
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
            throw new Error('El usuario ya está registrado');
        }

        // Encriptar la contraseña antes de guardar el usuario
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = new User({ ...userData, password: hashedPassword });
        
        await user.save();
        return user;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
  
};
