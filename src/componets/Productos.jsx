import React, { useEffect, useState } from 'react'

const Productos = () => {
    const [apiData, setApiData] = useState([]);
        useEffect(()=> {
            fetch('https://fakestoreapi.com/products?sort=desc')
            .then((response)=> response.json())
            .then((data) => {
                setApiData(data);             
            })
            .catch((error) => {
                console.error(error);
            });
        }, []);

        const categorias = [...new Set(apiData.map((producto) => producto.category))];

  // Agrupar los productos por categoría
  const productosPorCategoria = apiData.reduce((acumulador, producto) => {
    if (!acumulador[producto.category]) {
      acumulador[producto.category] = [];
    }
    acumulador[producto.category].push(producto);
    return acumulador;
  }, {});
        
        const totalData = apiData.length;
    return ( 
        <>
        <h2 className='h2'>Tus productos: {totalData}</h2>
        <section className='contenedor-productos'>
     
      {categorias.map((categoria) => (
        <article className='section-productos' key={categoria}>
          <h3 className='categoria'>{categoria}</h3>
            {productosPorCategoria[categoria].map((producto) => (
                <article className='cart-msv'>
                <img src={producto.image} alt={producto.title} />
                <p className='p_'>{producto.title}</p>
                <p>${producto.price}</p>
                <p>Ventas: {producto.rating.count}</p>
                </article>
            ))}
          
        </article>  
      ))}
      
    </section>
    </>
     );
}
 
export default Productos;