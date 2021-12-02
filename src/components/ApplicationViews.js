import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
// import { AnimalCard } from "./animal/AnimalCard"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"


import { LocationCard } from "./location/Location"

import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { AnimalForm } from "./animal/AnimalForm"

//Application veiw is where we project what is in your url  When you go to /animals go to animalList  -  Watching URL Bar and wathcing it change showind diff content
// controller component 
export const ApplicationViews = () => {
    return (
        
<AnimalProvider>
   <LocationProvider>
      <CustomerProvider>
         <Routes>
           <Route path="/" element={<Home />} />
              <Route path="animals/*" element={<AnimalList />} />
              <Route path="animals/create/*" element={<AnimalForm />} />
           </Routes>
       </CustomerProvider>
    </LocationProvider>
 </AnimalProvider>



       
    )
}

