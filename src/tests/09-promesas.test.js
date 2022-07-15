import { getHeroeByIdAsync } from './09-promesas';

describe('Prueba en 09-promesas', () => {
  test('getHeroeByIdAsync debe de retornar un heroe', (done) => {
    const id = 1;
    const heroeId = {
      id: 1,
      name: 'Batman',
      owner: 'DC'
    };
    getHeroeByIdAsync( id )
      .then( hero => {
        expect( hero).toEqual(heroeId)
        done();
      })
  });

  test('getHeroeByIdAsync debe de retornar un error si heroe no existe', (done) => {
    const id = 100;
    getHeroeByIdAsync( id )
      .then( hero => {
        
        done();
      })
      .catch( error => {
        expect( error ).toBe(`No se pudo encontrar el héroe`);
        done();
      });
  });
});