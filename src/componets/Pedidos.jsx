import React, {useState , useEffect} from 'react'

const Pedidos = () => {
    const [apiData, setApiData] = useState([]);
    const [productosData, setProductosData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/carts')
            .then((response) => response.json())
            .then((data) => {
                setApiData(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then((response) => response.json())
          .then((data) => {
            setProductosData(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

      const getProductoTitle = (productId) => {
        const producto = productosData.find((producto) => producto.id === productId);
        return producto ? producto.title : '';
      };

      

    return ( 
        <>
        <main className=''>
        {apiData.map((pedido) => (
        <section key={pedido.id}>
          <h3>Pedido #{pedido.id}</h3>
          <p>Fecha: {pedido.date}</p>
          {/* Mostrar los detalles del pedido, como los productos */}
          {pedido.products.map((producto) => (
            <article>
              <p key={producto.productId}>Producto: {getProductoTitle(producto.productId)}</p>
              <p key={producto.quantity}>Cantidad: {producto.quantity}</p>
              </article>
            ))}
        </section>
      ))}
      </main>
        </>
     );
}
 
export default Pedidos;