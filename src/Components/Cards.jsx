import react from 'react';
import '../styles/Animations.css';
 let Cards=(props)=>{
    return(
        <div className="card mb-4 rounded-1 shadow slider" style={{cursor:'pointer'}}>
            <img src={props.data.image} alt="Artist Name" className="card-img-top" />
            <div className="card-body rounded-1">
                <h4 className="card-title">{props.data.title}</h4>
                {
                    (props.data.texts).map(data=><p className="card-text">{data}</p>)
                }
            </div>
        </div>
    )
 }
 export default Cards;
// This component is used to display cards with images, titles, and text content.