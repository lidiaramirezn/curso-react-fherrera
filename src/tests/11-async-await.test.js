import { getImagen } from './11-async-await.js';

describe('Pruebas en 11-async-await', () => {
  test('getImagen debe de retornar un url de imagen', async() => {
      const url = await getImagen();

      expect( typeof url ).toBe('string');
  });
});