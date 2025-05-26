import {Route, Routes} from "react-router-dom"
import {routes} from "./routes"
import HomePage from "../pages/home/indes"
import EmployeesListPage from "../pages/employees"

const Router = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<HomePage />}/>
            <Route path={routes.employeesList} element={<EmployeesListPage />}/>
        </Routes>
    )
}

export default Router