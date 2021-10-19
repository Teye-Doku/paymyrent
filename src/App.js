
import './App.css';
import Header from './components/header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  {
   BrowserRouter as Router,
   Switch,
   Route
 } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
function App() {
  return (
 <div className="App">
  <Router>
    <Switch>
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
