import { useState } from 'react'
import './Form.css'

export default function Form({ addSighting }) {
    const [formLocation, setFormLocation] = useState('')
    const [formDetails, setFormDetails] = useState('')

    function handleInput(event) {
        if(event.target.name === 'location') {
            setFormLocation(event.target.value)
        } else {
            setFormDetails(event.target.value)
        }
    }

    function handleClick(event) {
        event.preventDefault()
        addSighting(formLocation, formDetails)
    }

    return (
        <form>
            <label>Wait, where??:
                <input type="text" name="location" value={formLocation} onChange={((event) => {
                    handleInput(event)})} required/>
            </label>
            <label>Wait, what??:
                <input type="text" name="details" value={formDetails} onChange={((event) => {
                    handleInput(event)})} required/>
            </label>
            <button onClick={((event) => { handleClick(event) })}>duh. duh. duhhhh</button>
        </form>
    )
}