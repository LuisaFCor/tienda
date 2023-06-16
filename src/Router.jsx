import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Products from './componets/Products';
import Productos from './componets/Productos';
import Pedidos from './componets/Pedidos';
import Ganancias from './componets/Ganancias';


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
            {
                path: "/ganancias",
                element: <Ganancias/>,
            },
        ]
    }    
]);
 
export default Router;