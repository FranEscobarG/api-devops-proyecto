import request from 'supertest';
import { app } from '../src/app';

describe('Registro de usuario', () => {
  it('Debería registrar un nuevo usuario', async () => {
    const response = await request(app).post('/api/v1/usuarios').send({
      name: 'test1',
      age: 32,
      lastname: 'Pérez', 
      email: 'test1@gmail.com',
      password: '123456',
      rol: 'TUTOR',
    });
    expect(response.statusCode).toBe(201);
  });

  it('Debería fallar si el usuario ya está registrado', async () => {
    await request(app).post('/api/v1/usuarios').send({
      name: 'test2',
      age: 32,
      lastname: 'Pérez',
      email: 'test2@gmail.com',
      password: '123456',
      rol: 'TUTOR',
    });
    const response = await request(app).post('/api/v1/usuarios').send({
      name: 'test2',
      age: 32,
      lastname: 'Pérez',
      email: 'test2@gmail.com',
      password: '123456',
      rol: 'TUTOR',
    });
    expect(response.statusCode).toBe(400);
  });
});
