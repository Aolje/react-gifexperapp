import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {
    test('Debe de traer 20 elementos', async () => {
        const gifs = await getGifs('Naruto');
        expect(gifs.length).toBe(20);
    });

    test('Debe de traer 0 elementos', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
})