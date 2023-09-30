import './styles/App.css';
import Navbar from './Components/Navbar';
import FrontPage from './Components/Front-page';
import Partnership from './Components/Partnership';
import Catalogue from './Components/Catalogue';
import Aboutus from './Components/Aboutus';
import Relativecontent from './Components/Relativecontent';
import Location from './Components/Location';
import Footer from './Components/Footer';
import FeaturedProducts from './Components/FeaturedProducts';

function App() {
  return (
    <div className="App" style={{maxWidth: "2460px"}}>
      <Navbar/>
      <FrontPage/>
      <Partnership/>
      <Catalogue/>
      <Aboutus/>
      <Relativecontent/>
      <FeaturedProducts/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
