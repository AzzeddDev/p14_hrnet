import {routes} from "../../router/routes";
import {Link, useLocation} from "react-router-dom";

const Header = () => {
    const location = useLocation()

    const isEmployeesListPage = location.pathname === routes.employeesList
    const isHomePage = location.pathname === routes.home

    return (
        <nav className="navbar">
            <div className="logo">HRnet</div>
            <div className="links">
                {isEmployeesListPage && (
                    <Link to={routes.home}>Add employees</Link>
                )}
                {isHomePage && (
                    <Link to={routes.employeesList}>View Current Employees</Link>
                )}
            </div>
        </nav>
    )
}

export default Header