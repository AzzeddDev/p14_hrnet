import React from "react"
import { Link } from "react-router-dom"
import {routes} from "../../router/routes"

interface Props {
    firstName: string
    lastName: string
}

const EmployeeSuccessModalContent: React.FC<Props> = ({ firstName, lastName }) => {
    return (
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                {firstName} {lastName} is registered!
            </p>
            <Link className="button" to={routes.employeesList}>View Employees List</Link>
        </div>
    )
}

export default EmployeeSuccessModalContent
