import react,{useState} from 'react';
import logo from '../assets/logo.png';
import '../styles/navigation.css';
import {Link,useLocation,useNavigate} from 'react-router-dom';
let Navigation = (props) => {
    const [open,setOpen]=useState(false);
    let location=useLocation();
    let endpoint=location.pathname;
    let navigate=useNavigate();
    console.log(endpoint)
    return (
        <div className="container-fluid" style={{position:'sticky',top:'0',zIndex:'1000'}}>
       <nav className="row p-3 d-flex justify-content-between d-none d-sm-none d-md-none d-lg-flex bg-white" >
            <div className="col-4 d-flex justify-content-between text-center align-items-center">
                <div className="col-3"><img className="img-fluid" src={logo} alt="logo"/></div>
                <div className='col-3 '><Link to="/" className={`navigation-link text-dark ${endpoint=="/"?"text-secondary fw-bold":""}`}>Home</Link></div>
                <div className='col-sm-4 col-lg-6 '><Link to="/concert" className={`navigation-link text-dark ${endpoint=="/concert"?"text-secondary fw-bold":""}`}>Avaliable Concert</Link></div>
            </div>
            <div className="col-lg-1 col-md-2 d-flex align-items-center" >
                {(localStorage.getItem("user")==null)?<Link to="/login" className={`navigation-link text-dark ${endpoint=="/login"?"text-secondary fw-bold":""}`}>Login <i class="fa-solid fa-right-to-bracket"></i></Link>:<h5 className="btn" onClick={()=>{localStorage.removeItem("user");navigate(-1)}}>Logout <i class="fa-solid fa-right-to-bracket"></i></h5>}
            </div>
       </nav> 
       <nav className="d-lg-none d-md-flex d-sm-flex d-flex row justify-content-between align-items-center p-3 position-sticky top-0 z-index-100 bg-white">
            <div className="col-lg-3 col-md-2 col-sm-4 col-4">
                <img src={logo} alt="logo" className="img-fluid" />
            </div>
            <div className="col-1">
                <h3 className="fa-solid fa-bars" onClick={()=>setOpen(!open)}></h3>
            </div>
       </nav>
       {(open)?<div className="col-md-5 col-sm-10 col-10 d-lg-none d-md-block d-sm-block d-block position-absolute end-0 bg-white p-3 shadow slider" style={{zIndex:'1000'}}>
            <div className=" d-flex flex-column g-4">
                <h1 onClick={()=>setOpen(!open)}><Link to="/concert" className={`navigation-link text-dark ${endpoint=="/concert"?"text-secondary fw-bold":""}`}>Avaliable Concert</Link></h1>
                {(localStorage.getItem("user")==null)?<h1 onClick={()=>setOpen(!open)}><Link to="/login" className={`navigation-link text-dark ${endpoint=="/concert"?"text-secondary fw-bold":""}`}>"Login"</Link></h1>:<h1 onClick={()=>{setOpen(!open);localStorage.removeItem("user")}}>Logout</h1>}
            </div>
       </div>:""}
       </div>
    );
}
export default Navigation;
// This component is used to display a navigation bar with links.