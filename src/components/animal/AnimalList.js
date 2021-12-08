import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
// import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import { useNavigate } from "react-router"


    
export const AnimalList = ({history}) => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
//   const { locations, getLocations } = useContext(LocationContext)
//   const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
  useEffect(() => { // hook
    console.log("AnimalList: Initial render before data")
    // getLocations()
    // // getAnimals()
    // .then(getCustomers)
    getAnimals()
}, [])

const navigate = useNavigate()

return (  // this is telling it to retreive the info from the database to display customer and local data when the add button is clicked
    
            <>
            <h2>Animals</h2>
            <button onClick={() => navigate("/animals/create")}>
                Make Reservation
            </button>
        <div className="animals">
        {animals.map(animal => {
    
    return <AnimalCard key={animal.id}
              
                animal={animal} />
})
}
    </div>
    </>
    )
}


