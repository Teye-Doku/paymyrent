import { useState,useEffect } from 'react';
import logo from '../../images/paymyrent.png';
import './Header.css';
import  * as FaIcons from "react-icons/fa";
import {
 Link,
 NavLink,
 withRouter
} from 'react-router-dom'


import { navitems } from '../../utilities/navitems'

 function Header() {
 const [ mobile,setMobile ] = useState(false);
 const [ sidebar,setSidebar ] = useState(false);

 useEffect(() => {
      
     const handleResize = () => {
          if(window.innerWidth < 1065) {
               setMobile(true);
          }else {
               setMobile(false);
          }
     }
     window.addEventListener("resize",handleResize);
     return () => {
        window.removeEventListener("resize",handleResize);
     }
 }, [])
 useEffect(() => {
          if(window.innerWidth < 1065) {
               setMobile(true);
          }
 }, [])
     
    return (
      
          <>
            <header className="header">
                <img className="header__logo" src={logo} alt="logo" />
                {!mobile &&  <nav className="header__nav">
                    { navitems.map( navitem => (
                        <li className="navitem" key={navitem.title}> <NavLink to={navitem.url} exact activeClassName="active-link">{navitem.title}</NavLink></li>
                    ))}
                    <button><Link to="/login">Login</Link></button>
                </nav>}
            { mobile &&  
            <div className="sidebar__toggle" >
                    {sidebar ? 
                    <FaIcons.FaTimes className="sidebar__toggle__logo" onClick={() => setSidebar(!sidebar)} /> 
                    :<FaIcons.FaBars className="sidebar__toggle__logo"  onClick={() => setSidebar(!sidebar)}  />} 
                </div>}
           </header>
           { sidebar && <div className={ sidebar ? 'sidebar active' :'sidebar'}>
             {mobile &&  <nav className="sidebar__items">
                    { navitems.map( navitem => (
                        <li className="sidebar__navitem" onClick={()=>setSidebar(false)} key={navitem.title}> <NavLink to={navitem.url} exact activeClassName="active-link">{navitem.title}</NavLink></li>
                    ))}
                    <button>Login</button>
                </nav>}
           </div>}
           {/* <div className="header__filter">
               <select>
                   <option value="price">Price</option>
                   <option value="location">Location</option>
                   <option value="room">Room</option>
               </select>
           </div> */}
          </>
      
    )
}
export default  withRouter(Header);