import { getImagen } from './11-async-await';

describe('Pruebas en 11-async-await', async() => {
  test('getImagen debe de retornar un url de imagen', () => {
      const url = await getImagen();

      console.log(url)
  });
});