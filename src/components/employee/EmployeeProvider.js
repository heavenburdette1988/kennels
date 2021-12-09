import React, { useState, createContext } from "react"

export const EmployeeContext = createContext()

// This component establishes what data can be used.
export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
        .then(res => res.json())
        .then(setEmployees)
    }

    const addEmployee = employeeObj => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees)
    }
    const getEmployeeById = (id) => {
        return fetch(`http://localhost:8088/employees/${id}?_expand=location`)
            .then(res => res.json())
    }
    const updateEmployee = employee => {
        return fetch(`http://localhost:8088/employees/${employee.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(employee)
        })
          .then(getEmployees)
      }
      
    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (

        //EmployeeContext.provider is an export to get access to v employees, getEmployees, addEmployee,getAnimalById

        <EmployeeContext.Provider value={{
            employees, getEmployees, addEmployee,getEmployeeById, updateEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}
