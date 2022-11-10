import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Card(props){
return (
    <div>
        <div className="card">
            <img src={props.imageUrl} className="card-img" />
            <div className="card-info">
                <div className="card-location">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <h4 className="location">{props.location}</h4>
                    <h5 className="location-link"><a href={props.googleMapsUrl}>View on Google Maps</a></h5>
                </div>
                <h1 className="card-title">{props.title}</h1>
                <p className="card-dates">{props.startDate}{props.endDate}</p>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
        <hr />
    </div>

)}