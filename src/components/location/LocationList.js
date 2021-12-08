import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { AnimalContext } from "../animal/AnimalProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { LocationCard } from "./Location"


import "./Location.css"
import { LocationContext } from "./LocationProvider"


export const LocationList = ({history}) => {
  // This state changes when `getAnimals()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { animals, getAnimals } = useContext(AnimalContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()
    .then(getEmployees)
    .then(getAnimals)

  }, [])
  const navigate = useNavigate()

  return (

    
    <>
    <h2>Location</h2>
    <button onClick={() => navigate("/locations/create")}>
        Add Location
    </button>
    <div className="locations">
      {console.log("LocationList: Render", locations)}
      {
        locations.map(location => {

          const employeeByLocation = location.employees.filter(e => e.locationId === location.id)
          const animalByLocation = location.animals.filter(a => a.locationId === location.id)

          const employeeCount = employeeByLocation.length
          const animalCount = animalByLocation.length

          return <LocationCard key={location.id}
           location={location} 
           employeeCount={employeeCount}
              animalCount={animalCount}/>
        })
      }
    </div>
    </>
  )
}