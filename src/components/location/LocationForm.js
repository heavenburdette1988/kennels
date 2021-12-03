import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"


import "./Location.css"
import { useNavigate } from 'react-router-dom';


export const LocationForm = () => {
    const { addLocation} = useContext(LocationContext)
    


    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [location, setLocation] = useState({
      name: "",
      address: ""
        });   // setting the state?

    const navigate = useNavigate();   //use nav allows you to change url locations?

    /*
    Reach out to the world and get customers state
    and locations state on initialization.
    // */
    // useEffect(() => {
    //   getLocations()
    // }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newLocation = { ...location } // this is giving newAnimal state and properties

      
      /* Animal is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newLocation[event.target.id] = event.target.value
      // update state
      setLocation(newLocation)
    }

    const handleClickSaveLocation = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form
        

        //invoke addAnimal passing animal as an argument.
        //once complete, change the url and display the animal list
        addLocation(location)
        .then(() => navigate("/locations")) //telling it to useNavigate to redisplay updated animal list
        }

    return (
      <form className="locationForm">
          <h2 className="LocationForm__title">New Locations</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Location Name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="address">Location Address:</label>
                  <input type="text" id="address" onChange={handleControlledInputChange} className="form-control" placeholder="Location address" value={location.address}/>
              </div>
          </fieldset>
    
          <button className="btn btn-primary"
            onClick={handleClickSaveLocation}>
            Save Location
          </button>
      </form>
    )
    }