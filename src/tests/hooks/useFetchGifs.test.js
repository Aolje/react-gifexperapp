import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Pruebas en el jook useFetchGifs', () => {
    test('Debe de retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('naruto'));
        const { data, loading } = result.current;

        await waitForNextUpdate({timeout:1500});
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    test('Debe de retornar un arreglo de imgs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('naruto'));
        await waitForNextUpdate({timeout:1500});
        const { data, loading } = result.current;
        console.log(data,loading);
        expect(data.length).toEqual(20);
        expect(loading).toBe(false);
    })
})