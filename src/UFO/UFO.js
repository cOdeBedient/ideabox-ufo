import './UFO.css'

export default function UFOs({ location, description }) {

    return (
        <div className="ufo">
           <h3>{location}</h3>
           <p>{description}</p>
        </div>
    )
}