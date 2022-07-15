import { getUser, getUsuarioActivo } from './05-funciones.js';

describe('Pruebas en 05-funciones', () => {
  test('getUser debe retornar un objecto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'admin'
    };

    const user = getUser();

    expect( testUser ).toEqual( user)
  });

  test('getUsuarioActivo debe retornar un objecto', () => {
    const name = 'Lidia';
    const testUser = {
      uid: 'ABC567',
      username: name
    };

    const user = getUsuarioActivo(name);

    expect( testUser ).toStrictEqual(user)
  });
});