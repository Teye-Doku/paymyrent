 import React, { Suspense } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import useAuth from './hooks/useAuth';
import AuthContext from './context/authcontext'; 
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
const Login = React.lazy(()=>import('./pages/Login/Login'));
const Signup = React.lazy(()=> import('./pages/Signup/Signup'));
const Home = React.lazy(()=> import('./pages/Home/Home'));
const About = React.lazy(()=> import('./pages/About/About'));
const Contact = React.lazy(()=> import('./pages/Contact/Contact'));
const OfficePayment = React.lazy(()=> import('./pages/OfficePayment/OfficePayment'));
const StorePayment = React.lazy(()=>import('./pages/StorePayment/StorePayment'));
const Payment = React.lazy(()=>import('./pages/Payment/Payment'));
const Houses = React.lazy(()=>import('./pages/Houses/Houses'));
const Offices = React.lazy(()=>import('./pages/Offices/Offices'))
const Stores = React.lazy(()=>import('./pages/Stores/Stores'));
const OfficeDetailPage = React.lazy(()=>import('./pages/OfficeDetailPage/OfficeDetailPage'));
const StoreDetailPage = React.lazy(()=>import('./pages/StoreDetailPage/StoreDetailPage'));
const DetialPage = React.lazy(()=>import('./pages/DetailPage/DetialPage'));
const LoanApplication = React.lazy(()=>import('./pages/LoanApplication/LoanApplication'));
const SearchPage = React.lazy(()=>import('./pages/SearchPage/SearchPage'));

// import DetialPage from './pages/DetailPage/DetialPage';
// import StoreDetailPage from './pages/StoreDetailPage/StoreDetailPage';
// import Stores from './pages/Stores/Stores';
// import Offices from './pages/Offices/Offices';
// import Services from './pages/Services/Services';

// import Houses from './pages/Houses/Houses';
// import Renovation from './pages/Renovation/Renovation';
// import Tenant from './pages/Tenant/Tenant';
// import OfficeDetailPage  from './pages/OfficeDetailPage/OfficeDetailPage';
// import Payment  from './pages/Payment/Payment';
// import SearchPage from './pages/SearchPage/SearchPage';

// import StorePayment from './pages/StorePayment/StorePayment';
// import OfficePayment from './pages/OfficePayment/OfficePayment';
// import LoanApplication from './pages/LoanApplication/LoanApplication';
// import HowItWorks from './pages/HowItWorks/HowItWorks';
 

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
   
     <Suspense fallback={<Loading />}>
             {/* <Route path="/howitworks" exact>
        <Header />
        <HowItWorks />
        <Footer />
      </Route> */}
    
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
      {/* <Route path="/verification" exact>
        <Header />
        <Tenant />
        <Footer />
      </Route>
      <Route path="/renovation" exact>
        <Header />
        <Renovation />
        <Footer />
      </Route> */}
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
      {/* <Route path="/services" exact>
        <Header />
        <Services />
        <Footer />
      </Route> */}
      <Route path="/houses" exact>
        <Header />
        <Houses />
      </Route>
      <Route path="/contact" exact>
        <Header />
        <Contact />
        <Footer />
      </Route>
      <Route path="/applyloan" exact>
        <Header />
        <LoanApplication />
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
     </Suspense>
   
    </Switch>
  </Router>
        
        
    </div>
    </AuthContext.Provider>
  );
}

export default App;
