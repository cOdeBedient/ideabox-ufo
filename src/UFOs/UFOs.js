import UFO from '../UFO/UFO'
import './UFOs.css'

export default function UFOs({ sightings }) {
const ufos = sightings.map((sighting) => {
    return (
            <UFO
                key={sighting.id}
                location={sighting.location}
                description={sighting.description}
            />
    )
})

    return (
        <div className='ufo-container'>
            {ufos}
        </div>
    )
}