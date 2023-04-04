import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Support from './Components/Support/Support';
import Info from './Components/Info/Info';
import Lounge from './Components/Lounge/Lounge';
import Travelers from './Components/Travelers/Travelers';
import Subscribars from './Components/Subscribars/Subscribars';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Travelers/>
      <Subscribars/>
      <Footer/>

    </div>
  );
}

export default App;
