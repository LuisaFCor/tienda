import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Products from './componets/Products';
import Productos from './componets/Productos';
import Pedidos from './componets/Pedidos';


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Products/>,
            },
            {
                path: "/productos",
                element: <Productos/>,
            },
            {
                path: "/pedidos",
                element: <Pedidos/>,
            },
        ]
    }    
]);
 
export default Router;