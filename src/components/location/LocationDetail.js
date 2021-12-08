import React, { useContext, useEffect, useState } from "react"

import "./Location.css"
import { useParams, useNavigate } from "react-router-dom"
import { LocationContext } from "./LocationProvider"

export const LocationDetail = () => {
  const { getLocationById, releaseLocation } = useContext(LocationContext)

	const [location, setLocation] = useState({})

	const {locationId} = useParams();
	const navigate = useNavigate();

  const handleRelease = () => {
    releaseLocation(location.id)
      .then(() => {
        navigate("/locations")
      })
  }

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
    }, [])

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">{location.address}</div>
   
      <h3 className="location__employees">Employees</h3>
      <div className="location__employeeName">
        {location.employees?.map(employeeObj => <p key={employeeObj.id}>{employeeObj.name}</p>)}
        {/* --employee list of names goes here-- */}
      </div>
      
      <h3 className="location__animals">Current Residents</h3>
      <div className="location__animalName">
        {location.animals?.map(animalObj => <p key={animalObj.id}>{animalObj.name}</p>)}
       
        <button onClick={handleRelease}>Delete Location</button>
        <button onClick={() => {
    navigate(`/locations/edit/${location.id}`)
}}>Edit</button>

        {/* --animal list of names goes here-- */}
      </div>
    </section>
  )
}
