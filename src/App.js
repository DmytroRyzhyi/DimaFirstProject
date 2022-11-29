
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import {Route, Routes} from "react-router-dom";
import Catalog from './components/Catalog/Catalog';
import ProductPage from './components/ProductPage/ProductPage';
import Registry from './components/Registry/Registry';
import Sign from './components/Sign/Sign';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/register' element={<Registry />} />
        <Route path='/' element={<Sign/>} />
        <Route path='/home' element={<MainPage />} />
        <Route element={<ProtectedRoutes/>}>
        <Route path='/catalog' element={<Catalog />} />
        <Route path="/catalog/:id" element={<ProductPage/>} />
       </Route>
      </Routes>
      {/* <MainPage/> */}
      <Footer />
    </div>
    
  );
}

export default App;
