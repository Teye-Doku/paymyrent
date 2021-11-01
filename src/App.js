
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Login from './pages/Login/Login';
import Header from './components/header/Header';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import DetialPage from './pages/DetailPage/DetialPage';
import Stores from './pages/Stores/Stores';
import Offices from './pages/Offices/Offices';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';


function App() {
  return (
 <div className="App">
  <Router>
    <Switch>
      <Route path="/apartment/:apartmentid" exact>
        <Header />
        <DetialPage />
        <Footer />
      </Route>
      <Route path="/stores" exact>
        <Header />
        <Stores />
      </Route>
      <Route path="/offices" exact>
        <Header />
        <Offices />
      </Route>
      <Route path="/services" exact>
        <Header />
        <Services />
        <Footer />
      </Route>
      <Route path="/contact" exact>
        <Header />
        <Contact />
        <Footer />
      </Route>
      <Route path="/about" exact>
        <Header />
        <About />
 
      </Route>
      <Route path="/signup" exact>
        <Signup />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/" exact>
        <Header />
        <Home />
        <Footer />
      </Route>
    </Switch>
  </Router>
        
        
    </div>
  );
}

export default App;
