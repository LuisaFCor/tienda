import React, { useEffect, useState } from 'react'

const Ganancias = () => {
    const [apiData, setApiData] = useState([]);
    const [totalGanancias, setTotalGanancias] = useState(0);
    useEffect(()=> {
        fetch('https://fakestoreapi.com/products?sort=desc')
        .then((response)=> response.json())
        .then((data) => {
            setApiData(data);
            const totalGanancias = data.reduce((total, item) => total + (item.rating.count * item.price), 0);
            setTotalGanancias(totalGanancias);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);
    return (
        <>
            <main className='contenedor-ganancias'>
                <h2 className='title-ganancias'>Estas son tus Ganancias</h2>
                <p className='parragraph-ganancias'>${totalGanancias.toFixed(2)}</p>
            </main>
        </> 
    );
}
 
export default Ganancias;