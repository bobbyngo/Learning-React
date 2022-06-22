import React from "react"

export default function Card(props) {
    const {imageUrl, location, googleMapsUrl, title, startDate, endDate, description} = props;
    return (
        <div className="wrapper">
            <div className="card-container">
                <img className="card-image" src={imageUrl}/>
                <div className="card-content">
                    <div className="container">
                        <img className="card-icon" src="../images/destination.png"/>
                        <span className="card-location">{location}</span>
                        <a className="card-link" href={googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h2 className="card-title">{title}</h2>
                    <p className="card-date">{startDate} - {endDate}</p>
                    <p className="card-description">{description}</p>
                </div>
            </div>
            <p className="card-line"></p>
        </div>
    )
}