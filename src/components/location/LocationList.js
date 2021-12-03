import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { LocationCard } from "./Location"


import "./Location.css"
import { LocationContext } from "./LocationProvider"


export const LocationList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()

  }, [])
  const navigate = useNavigate()

  return (

    
    <>
    <h2>Location</h2>
    <button onClick={() => {navigate("create")}}>
        Add Location
    </button>
    <div className="locations">
      {console.log("LocationList: Render", locations)}
      {
        locations.map(location => {


          return <LocationCard key={location.id} location={location} />
        })
      }
    </div>
    </>
  )
}