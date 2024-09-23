import request from 'supertest';
import { app } from '../src/app';

describe('Registro de usuario', () => {
  it('Debería registrar un nuevo usuario', async () => {
    const response = await request(app).post('/api/v1/usuarios').send({
      name: 'Nancy',
      age: 32,
      lastname: 'Escobar', 
      email: 'nan@gmail.com',
      password: '123456',
      rol: 'tutor',
    });
    expect(response.statusCode).toBe(201);
  });

});
