import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import DataTable from "react-data-table-component"
import {routes} from "../../router/routes";
import {Link} from "react-router-dom";

const EmployeesListPage = () => {
    const employees = useSelector((state: RootState) => state.employees.employees)

    const columns = [
        { name: "First Name", selector: (row: { firstName: any }) => row.firstName, sortable: true },
        { name: "Last Name", selector: (row: { lastName: any }) => row.lastName, sortable: true },
        { name: "Date of Birth", selector: (row: { dateOfBirth: any }) => row.dateOfBirth },
        { name: "Start Date", selector: (row: { startDate: any }) => row.startDate },
        { name: "Street", selector: (row: { street: any }) => row.street },
        { name: "City", selector: (row: { city: any }) => row.city },
        { name: "State", selector: (row: { state: any }) => row.state },
        { name: "Zip Code", selector: (row: { zipCode: any }) => row.zipCode },
        { name: "Department", selector: (row: { department: any }) => row.department, sortable: true },
    ]

    // console.log("Employees dans Redux:", employees)

    return (
        <div className="container">
            <Link to={routes.home}>Add employees</Link>
            <h2>Current Employees</h2>
            <DataTable
                columns={columns}
                data={employees}
                pagination
                highlightOnHover
                striped
            />
        </div>
    )
}

export default EmployeesListPage
