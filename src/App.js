import './App.css';
import {Route, Routes} from 'react-router-dom';
import { Anasayfa } from './components/Anasayfa';
import { Contact } from './components/Contact';
import { Products } from './components/Products';
import { Navbar } from './components/Navbar';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Anasayfa/>}/>
        <Route path='/anasayfa' exact element={<Anasayfa/>}/>
        <Route path='/iletisim' exact element={<Contact/>}/>
        <Route path='/ürünler' exact element={<Products/>}/>

      </Routes>
    
    </div>
  );
}

export default App;
