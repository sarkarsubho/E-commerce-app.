
import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Cart } from './Pages/Cart';
import { DetailsPage } from './Pages/DetailsPage';

function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/product/:id' element={<DetailsPage></DetailsPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
