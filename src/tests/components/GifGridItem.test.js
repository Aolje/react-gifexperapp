import React from 'react';
import {
    shallow
} from 'enzyme';
import {
    GifGridItem
} from '../../components/GifGridItem';

describe('Pruebas en GifGridItem', () => {

    const url = 'https://estonoexiste.com/algo.jpg';
    const title = 'Hola Universo';
    const wrapper = shallow(< GifGridItem url={url} title={title} />);

    test('Debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title)
    });

    test('Debe de tener la img igual a la url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });


    test('Debe de tener el animate__backInUp', () => {
        const div = wrapper.find('div');
        expect(div.prop('className').includes('animate__backInUp')).toBe(true);
    });

});