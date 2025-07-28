import react,{useState} from 'react';
import logo from '../assets/logo.png';
import {data, Link } from 'react-router-dom';
import {useNavigate,useLocation} from 'react-router-dom';
import concertImage from '../assets/concert.jpg';
import { handleInputChange} from '../validation/forForms';
import axios from 'axios';
let Booking=()=>{
    let navigate=useNavigate();
    let concert=useLocation().state || {};
    let submitData=async(e)=>{
            e.preventDefault();
            await axios.post('http://localhost:4001/data',userData).then((response)=>{
                console.log("Booking successful:", response.data);
                alert("Booking successful!");
                navigate('/concert');
            }).catch((error)=>{
                console.error("Error booking concert:", error);
                alert("Booking failed. Please try again.");
            });
            console.log("Here is the user data: ",userData);
    }
    const [userData,setUserdata]=useState({
        name:"",
        data:null,
        numberOfTickets:1,
        comfort:"Standard",
        ticketprice:concert.ticketprice*1,
        id:concert.id || ''
    })
    let [dataCheck,setDataCheck]=useState({
        name:false,
        date:true,
        numberOfTickets:true,
        comfort:true,
        id:true
    });
    const [formStatus,setFormStatus]=useState({
        status:false,
        fieldName:null,
        fullValid:false
    });
    return(

        <div className="container-fluid">
            {(localStorage.getItem('user')==null)?<h1>Login First</h1>:
            <div className="row d-flex justify-content-center align-items-center vh-75 ">
                
                    <h3 className="fa-solid fa-angle-left " style={{position:'absolute',top:'100px',left:'20px',cursor:'pointer'}} onClick={()=>navigate(-1)}></h3>
                
                <div className="row d-flex justify-content-center align-items-center mb-2 ">
                    <img src={concertImage}x alt="Concert" className="img-fluid col-lg-3 d-none d-md-none d-sm-none d-lg-flex" />
                    <form className="col-11 col-sm-12 col-md-6 col-lg-4" onSubmit={(e)=>submitData(e)} autoComplete='on' method="post">
                        <h2 className="text-center mb-4 fw-bold">Book Your Concert</h2>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" name="name" id="name" value={userData.name} placeholder="Enter Full name" onChange={(e)=>{
                                console.log(dataCheck);
                                let result=handleInputChange(e,dataCheck);
                                    setDataCheck({...dataCheck,[e.target.name]:result.status});
                                    setFormStatus({...result});
                                    setUserdata({...userData,[e.target.name]:e.target.value})}} required autofocus/>
                        </div>
                        {console.log("Here is the concert data check: ",dataCheck)}
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input type="date" className="form-control" name="date" value={concert.releaseDate} id="date" disabled/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="numberOfTickets" className="form-label">Number of Tickets</label>
                            <input type="number" min="1" className="form-control" name="numberOfTickets" id="numberOfTickets" value={userData.numberOfTickets} placeholder="Enter number of tickets" onChange={(e)=>setUserdata({...userData,numberOfTickets:e.target.value,ticketprice:concert.ticketprice*e.target.value})}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="comfort" className="form-label">Comfort Level</label>
                            <select className="form-select" name="comfort" id="comfort" value={userData.comfort} onChange={(e)=>setUserdata({...userData,comfort:e.target.value})}>
                                <option value="Standard" >Standard</option>
                                <option value="Premium">Premium</option>
                                <option value="Royal">Royal</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary w-100" disabled={!formStatus.fullValid}>Book Now</button>
                        <div className="row d-flex justify-content-center mt-4">
                        <div className="col-12">
                            <table className="table table-striped mt-3">
                                <tr>
                                    <th>Name</th>
                                    <th>Genre</th>
                                    <th>Date</th>
                                    <th>Cost</th>
                                </tr>
                                <tr>
                                    <td>{concert.name ?? 'no Data'}</td>
                                    <td>{concert.genre ?? 'no Data'}</td>
                                    <td>{concert.releaseDate ?? 'no Data'}</td>
                                    <td>{userData.ticketprice ?? 0}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    </form>
                </div>
            </div> }
        </div>
    )
}
export default Booking;
// This component is used to display a booking page with a message and a back button.