import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

    // const [categories, setCategories] = useState(['Tokyo Ghoul']);
    const [categories, setCategories] = useState(defaultCategories);


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {categories.map(cate => (
                    <GifGrid
                        key={cate}
                        category={cate}
                    />
                ))
                }
            </ol>
        </>
    )
};



export default GifExpertApp