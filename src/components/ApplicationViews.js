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
import { EmployeeForm } from "./employee/EmployeeForm"
import { LocationForm } from "./location/LocationForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationDetail } from "./location/LocationDetail"

//Application veiw is where we project what is in your url  When you go to /animals go to animalList  -  Watching URL Bar and wathcing it change showind diff content
// controller component 
export const ApplicationViews = () => {
    return (
       <LocationProvider>
        <EmployeeProvider>
     <AnimalProvider>   
   <LocationProvider>
      <CustomerProvider>
         <Routes>
           <Route path="/" element={<Home />} />
              <Route path="animals/*" element={<AnimalList />} />
              <Route path="animals/create/*" element={<AnimalForm />} />
      <Route path="animals/detail/:animalId/*" element={<AnimalDetail />} />

              <Route path="employees/*" element={<EmployeeList />} />
              <Route path="employees/create/*" element={<EmployeeForm />} />
               <Route path="employees/detail/:employeeId/*" element={<EmployeeDetail />} />

              <Route path="locations/*" element={<LocationList />} />
              <Route path="locations/create/*" element={<LocationForm />} />
              <Route path="locations/detail/:locationId/*" element={<LocationDetail />} />






           </Routes>
       </CustomerProvider>
    </LocationProvider>
 </AnimalProvider>
       </EmployeeProvider>
       </LocationProvider>
    )
}

