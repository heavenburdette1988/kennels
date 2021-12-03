import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./Employee"
import "./Employee.css"
import { LocationContext } from "../location/LocationProvider"
import { useNavigate } from "react-router"

export const EmployeeList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getLocations()
    .then(getEmployees)

  }, [])

  const navigate = useNavigate()

  return (
    <>
    <h2>Employees</h2>
    <button onClick={() => {navigate("create")}}>
        Add Employee
    </button>
    <div className="employees">


      {console.log("EmployeeList: Render", employees)}
      {
        employees.map(employee => {

          const office = locations.find(l => l.id === employee.locationId)
          return <EmployeeCard
           key={employee.id} 
          location = {office}
          employee={employee} />
        })
      }
    </div>
    </>
  )
}
