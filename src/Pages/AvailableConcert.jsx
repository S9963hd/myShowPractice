import {useState, useEffect} from 'react';
import axios from 'axios';
import concertImage from '../assets/placeholder.jpg'; // Assuming you have a concert image in your assets
import { Link } from 'react-router-dom';
let AvailableConcert = () => {
    const [selectedConcert, setSelectedConcert] = useState(0);
    const [concerts, setConcerts] = useState([
        // { id: 1, name: "Concert A", date: "2023-11-01" },
        // { id: 2, name: "Concert B", date: "2023-11-05" },
        // { id: 3, name: "Concert C", date: "2023-11-10" },
        // { id: 1, name: "Concert A", date: "2023-11-01" },
        // { id: 2, name: "Concert B", date: "2023-11-05" },
        // { id: 3, name: "Concert C", date: "2023-11-10" }
    ]);
    let fetchConcertDetails=async ()=>{
        try{
            await axios({method:'get',url:"http://localhost:4000/data"}).then((response)=>{setConcerts(response.data);console.log(response.data)}).catch(err=>{throw new Error(err)});
            
        }catch(err){
            console.error("Error fetching concert details:", err);
        }
    }
    useEffect(()=>{
        fetchConcertDetails()}, []);

    return (
        <div className="container-fluid" >
            <div className="row m-3 d-flex justify-content-center align-items-center">
                {(concerts.length>0)?concerts.map((concert,id) => (
                    <div className="col-12 m-2 " key={id}>
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title">{concert.name?? 'no Data'}</h5>
                                <p className="card-text">Date: {concert.releaseDate ?? "no Data"}</p>
                                <button className="btn btn-primary" onClick={()=>{setSelectedConcert(id);document.getElementById("modal").showModal()}}>Show More</button>
                            </div>
                        </div>
                    </div>
                )):<h3>No Concert Available</h3>}
            </div>
                    <ModalDetails concert={{...concerts[selectedConcert]}}/>
        </div>
    );
}
function ModalDetails({concert}){
    return(
            <div className="row d-flex justify-content-center align-items-center bg-dark h-75">
                <dialog id="modal" className="col-lg-6 col-md-8 col-sm-10 border border-0 shadow mt-5 rounded rounded-3 ">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-lg-5 col-md-11 col-sm-11 col-11">
                                    <img src={concertImage} alt="Concert" className="img-fluid m-3" />
                        </div>
                        <div className="col-lg-6 text-center">
                                <h2 className="text-center fw-bold">{concert.name ?? 'no Data'}</h2>
                                <p className="text-center">Date: {concert.releaseDate ?? 'no Data'}</p>
                                <p className="text-center">Description: {concert.description || "No description available."}</p>
                                <Link className="btn btn-primary col-4 me-2" to="/booking" state={{...concert}}>Book Now</Link>
                                <button className="btn btn-danger col-4 " onClick={()=>document.getElementById("modal").close()}>Close</button>
                        </div>
                    </div>
                </dialog>
            </div>
    )
}
export default AvailableConcert;
// This component is used to display a list of available concerts with booking options.