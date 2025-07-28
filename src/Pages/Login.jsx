import {useState}  from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
//validation
import {handleInputChange} from '../validation/forForms';
let Login =()=>{
    let navigate=useNavigate();
    let submitData=async(e)=>{
            e.preventDefault();
            await axios.get('http://localhost:4001/login',userData).then((response)=>{
                let responseData=response.data;
                responseData.map((data)=>{
                    console.log(data.email,data.password);
                    if(data.email==userData.email && data.password==userData.password){
                        console.log("Login successful:", response.data);
                        localStorage.setItem('user', JSON.stringify(data));
                        alert("Login successful!");
                        navigate('/');
                    }else{
                        alert("Invalid credentials. Please try again.");
                    }
                });
            }).catch((error)=>{
                console.error("Error booking concert:", error);
                alert("Booking failed. Please try again.");
            });
            console.log("Here is the user data: ",userData);
    }
    const[userData,setUserData]=useState([{
        email:'',
        password:"",
    }])
    const [dataCheck,setDataCheck]=useState({
        email:false,
        password:false,
    });
    const [formStatus,setFormStatus]=useState({
        status:false,
        fieldName:null,
        fullValid:false
    });
    return(
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center vh-75 ">
                <div className="col-12 mt-4 ms-5 mb-3">
                    <h3 class="fa-solid fa-angle-left" onClick={()=>navigate('/')}></h3>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8 col-10">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="text-center mb-4 fw-bold">Login At MyShow</h2>
                            <form onSubmit={(e)=>submitData(e)} autoComplete='on' method="post">
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" value={userData.email} name="email" id="username" placeholder="Enter your username" onChange={(e)=>{
                                 console.log(dataCheck);
                                let result=handleInputChange(e,dataCheck);
                                    setDataCheck({...dataCheck,[e.target.name]:result.status});
                                    console.log("Here is the result: ",result);
                                    setFormStatus({...result});
                                    setUserData({...userData,[e.target.name]:e.target.value})
                                    }}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" id="password" placeholder="Enter your password" value={userData.password} onChange={(e)=>{
                                 console.log(dataCheck);
                                let result=handleInputChange(e,dataCheck);
                                    setDataCheck({...dataCheck,[e.target.name]:result.status});
                                    setFormStatus({...result});
                                    setUserData({...userData,[e.target.name]:e.target.value})
                                    }}/>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                                {/* <button type="submit" className="btn btn-primary w-100" disabled={!formStatus.fullValid}>Login</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default Login;
// This component is used to display a login form with username and password fields.