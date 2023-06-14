import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { faPercent } from '@fortawesome/free-solid-svg-icons';

const Products = () => {
    const [apiData, setApiData] = useState([]);
    const [totalPedidos, setTotalPedidos] = useState(0);
    const [precioPromedio, setPrecioPromedio] = useState(0);
    const [totalGanancias, setTotalGanancias] = useState(0);
        useEffect(()=> {
            fetch('https://fakestoreapi.com/products?sort=desc')
            .then((response)=> response.json())
            .then((data) => {
                setApiData(data);
                const total = data.reduce((total, item) => total + item.rating.count, 0);
                setTotalPedidos(total);
                const cantidadProductos = data.length;
                const precioPromedio = cantidadProductos;
                setPrecioPromedio(precioPromedio);
                const totalGanancias = data.reduce((total, item) => total + (item.rating.count * item.price), 0);
                setTotalGanancias(totalGanancias);
            })
            .catch((error) => {
                console.error(error);
            });
        }, []);

        const totalData = apiData.length;
        const masVendidos = apiData.filter(item => item.rating.count >= 300);

    
    return ( 
        <main className='contenedor'>
            <section id='estadisticas'>
                <h1 className='title-est'>Estadisticas</h1>
                <article className='cart'>
                    <picture className='icon'>
                    <FontAwesomeIcon icon={faDatabase} />
                    </picture>
                <h2 className='h2'>Total Productos</h2>
            <p>{totalData}</p>
            </article>
            <article className='cart'>
            <picture className='icon'>
                    <FontAwesomeIcon icon={faCartShopping} />
                    </picture>
                <h2 className='h2'>Total Ventas</h2>
                    <p>{totalPedidos}</p>
            </article>
            
            <article className='cart'>
                <picture className='icon'>
                    <FontAwesomeIcon icon={faPercent} />
                    </picture>
                <h2 className='h2'>Precio Promedio</h2>
                <p>${precioPromedio.toFixed(1)}</p>
            </article>
            <article className='cart'>
                <picture className='icon'>
                    <FontAwesomeIcon icon={faMoneyCheckDollar} />
                    </picture>
                <h2 className='h2'>Total Ganancias</h2>
                <p>${totalGanancias.toFixed(2)}</p>
            </article>
            </section>
            <section className='masvendidos'>
                <h2 className='h2'>Mas vendidos</h2>
                {masVendidos.map(item => (
                    <article className='cart-msv'>
                        <img src={item.image}/>
                        <p className='p_' key={item.id}>{item.title}</p>
                        <p key={item.id}>Ventas: {item.rating.count}</p>
                    </article>
                
                ))}
            </section>
            
        </main>
     );
}
 
export default Products;