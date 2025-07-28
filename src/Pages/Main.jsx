import videoClip from '../assets/concert.mp4';
import '../styles/Main.css';
import '../styles/Animations.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
let Main=()=>{
    const [registered, setRegistered] = useState([]);
    useEffect(() => {
        const fetchRegisteredConcerts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/data');
                setRegistered(response.data);
                console.log("Registered concerts:", response.data);
            } catch (error) {
                console.error("Error fetching registered concerts:", error);
            }
        }
        fetchRegisteredConcerts();
    },[]);
    return(
        <div className="container-fluid ">
            <div className="row backgroundClip position-relative " >
                <video className="" src={videoClip} autoPlay loop muted style={{width:'100vw',objectFit:'fill'}}></video>
                <div className="row d-flex justify-content-start align-items-center position-absolute top-1 h-100 " style={{zIndex:100}}>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 offset-lg-1 offset-md-3 gy-5 d-flex justify-content-center zIndex-3">
                        <div className="row  flex-column">
                            <h1 className="text-white text-center h1 fw-bold d-lg-block d-md-block d-sm-none d-none display-4">Welcome to MyShow</h1>
                            <h1 className="text-white text-center h1 fw-bold d-lg-none d-md-none d-sm-block d-block fw-bold">Welcome to MyShow</h1>
                            <p className="text-white text-center">Explore the best concerts and book your tickets now! with you favourite Singer</p>
                        </div>
                    </div>
                    <div className="d-none d-md-none d-lg-block">
                        <h1 className='text-center footer text-light mb-4 fw-bold'>Get ready for the Real Vibe !!!</h1>
                        <h3 className='text-center text-light'>100+ concert managed per day</h3>
                    </div>
                </div>
                {/* {Array.from({length: 10}).map((_, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={index}>
                    <Cards data={{ image: logo, title: `Concert ${index + 1}`, texts: [`Description for concert ${index + 1}`, `More details about concert ${index + 1}`] }} />
                    </div>))}    */}
            </div>
            <div className="row d-flex justify-content-center align-items-center mt-5 text-center"  >
                    <h1 className="col-12 fw-bold">Current Number Of Bookings</h1> 
                    <div className="col-12">
                        <h1 className="display-1 text-primary fw-bold">{registered.length ??0}+</h1>
                        <p className="text-secondary">Bookings made in the last 24 hours</p>
                    </div>  
                </div>
      </div>
    )
}
export default Main;