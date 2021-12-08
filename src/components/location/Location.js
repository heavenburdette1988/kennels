import React from "react"
import { Link } from "react-router-dom"
import "./Location.css"

export const LocationCard = ({ location, employeeCount, animalCount }) => (
    <section className="location">
          <h3 className="location__name">
          <Link to={`/locations/detail/${location.id}`}>
            { location.name }
          </Link>
          </h3>
          <p className="location__employeeCount">{employeeCount} employees</p>
        <p className="location__animalCount">{animalCount} animals</p>
    </section>
)


