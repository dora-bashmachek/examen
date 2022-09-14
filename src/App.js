import Logo from './components/logo/logo';
import Brands from './components/brands/brands';
import Photo from './components/photo/photo';
import Login from './components/login/login';
import Footer from './components/footer/footer';

import './App.css';

function App() {
  return (
    <div>
     <div  className='logo'> <Logo/> </div>
    <div className='brands'> <Brands /> </div>
    <div className='photo'> <Photo/> </div>
    <div className='login'> <Login/> </div>
    <div className='foot'> <Footer/> </div>
    </div>
  );
}

export default App;
