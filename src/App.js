
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
import StoreDetailPage from './pages/StoreDetailPage/StoreDetailPage';
import Stores from './pages/Stores/Stores';
import Offices from './pages/Offices/Offices';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Houses from './pages/Houses/Houses';
import Renovation from './pages/Renovation/Renovation';
import Tenant from './pages/Tenant/Tenant';
import OfficeDetailPage  from './pages/OfficeDetailPage/OfficeDetailPage';
import Payment  from './pages/Payment/Payment';
import SearchPage from './pages/SearchPage/SearchPage';
import useAuth from './hooks/useAuth';
import AuthContext from './context/authcontext'; 
import StorePayment from './pages/StorePayment/StorePayment';
import OfficePayment from './pages/OfficePayment/OfficePayment';
 

function App() {
  const {token,login,logout,userId } = useAuth();
  return (
<AuthContext.Provider value={{
   isLoggedIn:!!token,
   login:login,
   logout:logout,
   token:token,
   userId:userId
}}>
 <div className="App">
  <Router>
    <Switch>
   

      <Route path="/search/:town" exact>
        <Header />
        <SearchPage />
      </Route>
      <Route path="/officepayments/:officepayid" exact>
        <Header />
        <OfficePayment />
        <Footer />
      </Route>
      <Route path="/storepayments/:storepayid" exact>
        <Header />
        <StorePayment />
        <Footer />
      </Route>
      <Route path="/payments/:housepayid" exact>
        <Header />
        <Payment />
        <Footer />
      </Route>
      <Route path="/offices/:officeid" exact>
        <Header />
        <OfficeDetailPage />
        <Footer />
      </Route>
      <Route path="/verification" exact>
        <Header />
        <Tenant />
        <Footer />
      </Route>
      <Route path="/renovation" exact>
        <Header />
        <Renovation />
        <Footer />
      </Route>
      <Route path="/store/:storeid" exact>
        <Header />
        <StoreDetailPage />
        <Footer />
      </Route>
      <Route path="/apartment/:houseid" exact>
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
      <Route path="/houses" exact>
        <Header />
        <Houses />
      </Route>
      <Route path="/about" exact>
        <Header />
        <About />
        <Footer />
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
    </AuthContext.Provider>
  );
}

export default App;
