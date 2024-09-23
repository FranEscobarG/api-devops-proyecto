import { Request, Response } from 'express';
import { createUser } from '../services/userService';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    console.log(user);
    res.status(201).json(user);
  } catch (error: any) { 
    res.status(400).json({ message: error.message });
  }
};
