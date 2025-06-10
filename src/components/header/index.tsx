import {routes} from "../../router/routes";
import {Link, useLocation} from "react-router-dom";

const Header = () => {
    const location = useLocation()

    const isEmployeesListPage = location.pathname === routes.employeesList
    const isHomePage = location.pathname === routes.home

    return (
        <nav className="navbar">
            <Link className="logo" to={routes.home}>
                <h1>HRnet</h1>
            </Link>
            <div className="links">
                {isEmployeesListPage && (
                    <Link className={"button"} to={routes.home}>Add Employee</Link>
                )}
                {isHomePage && (
                    <Link className={"button"} to={routes.employeesList}>Employees List</Link>
                )}
            </div>
        </nav>
    )
}

export default Header