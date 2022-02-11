import {
  Route
} from 'react-router-dom';

const HubtelPayment = ({ to, ...routeProps }) => {
    return <Route {...routeProps} render={() => window.location = to} />;
 };

export default HubtelPayment; 
