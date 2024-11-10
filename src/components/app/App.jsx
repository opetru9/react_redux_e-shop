import { useEffect } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/header';
import AppRoutes from './Routes/Routes'
import SideBar from './SideBar/SideBar';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../features/categories/categoriesSlice';
import { getProducts } from '../../features/products/productsSlice';

const App = () => {
    const dispatch = useDispatch();

    // la Mount  o singura data ( dipatch in dependente e ca si cum [] ,se extrag datele de pe API
    useEffect(()=>{
        dispatch(getCategories());
        dispatch(getProducts());
    }, [dispatch])

    return ( 
        <div className="app">
            <Header/> 

            <div className='container'>
                <SideBar/>
                <AppRoutes/>
            </div>

            <Footer/>

        </div>
     );
}
 
export default App;