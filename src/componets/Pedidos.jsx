import React, {useState , useEffect} from 'react'

const Pedidos = () => {
    const [apiData, setApiData] = useState([]);
    const [productosData, setProductosData] = useState([]);
    const [usuariosData, setUsuariosData] = useState([]);

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

      useEffect(() => {
        fetch('https://fakestoreapi.com/users')
          .then((response) => response.json())
          .then((data) => {
            setUsuariosData(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

      const getProductoTitle = (productId) => {
        const producto = productosData.find((producto) => producto.id === productId);
        return producto ? producto.title : '';
      };

      const getUsuarioData = (userId) => {
        const usuario = usuariosData.find((usuario) => usuario.id === userId);
        return usuario ? usuario : {};
      };

    return ( 
        <>
        <main className='alinear'>
        <section className='contenedor-pedidos'>
          {apiData.map((pedido) => {
            const usuario = getUsuarioData(pedido.userId);
            return (
              <section className='posicion-pedidos' key={pedido.id}>
                <article className='posicionar'>
                  <h3>Pedido #{pedido.id}</h3>
                  <p>Fecha: {pedido.date}</p>
                  <p>Usuario: {usuario.name.firstname} {usuario.name.lastname}</p>
                  <p>Email: {usuario.email}</p>
                  <p>Teléfono: {usuario.phone}</p>
                  <p>Dirección: {usuario.address?.street}, {usuario.address?.city}</p>
                </article>
                {/* Mostrar los detalles del pedido, como los productos */}
                {pedido.products.map((producto) => (
                  <article className='info' key={producto.productId}>
                    <p>Producto: {getProductoTitle(producto.productId)}</p>
                    <p>Cantidad: {producto.quantity}</p>
                  </article>
                ))}
              </section>
            );
          })}
        </section>
      </main>
        </>
     );
}
 
export default Pedidos;