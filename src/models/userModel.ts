import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  age: number;
  lastname: string;
  email: string;
  password: string;
  rol: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  lastname: { type: String, required: true }, 
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: { type: String, required: true },
});

export const User = mongoose.model<IUser>('Users', UserSchema);
