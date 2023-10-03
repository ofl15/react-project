import Navbar from './components/navbar'
import Footer from './components/footer';
import User from './components/user';
import Home from './components/home';
import About from './components/about';
import {  Routes , Route } from 'react-router-dom';

function App() {

  const users = [
    {firstname:'Karim' , username:"karim012",  desc:"Karimdek aqqli inson yo`q"},
    {firstname: 'Farmon', username:"farik333", desc:"Farik kasal"}  
  ]
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />}>
        </Route>
      </Routes>

      <Footer/>
    </div>
  );
}



export default App;
