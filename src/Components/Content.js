import loc from "../Assets/loc.svg";

export default function Content(props){
        return (
            <div className="content-container">
                <div className="image-left">
                    <img src={props.content.imageUrl} alt="img" className="content-img"></img>
                </div>
                <div className="content-right">
                    <div className="content-location">
                        <img src={loc} alt="location" className="loc"></img>
                        <p className="location-name">{props.content.location}</p>
                        <a className="location-link" href={props.content.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1 className="content-title">{props.content.title}</h1>
                    <h3 className="content-dates">{props.content.startDate} - {props.content.endDate}</h3>
                    <p className="content-text">{props.content.description}</p>
                </div>
            </div>
        );
}