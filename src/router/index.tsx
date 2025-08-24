import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"
import { lazy, Suspense } from "react"

// lazy load des pages
const HomePage = lazy(() => import("../pages/home/indes"))
const EmployeesListPage = lazy(() => import("../pages/employees"))

const Router = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={routes.home} element={<HomePage />} />
                <Route path={routes.employeesList} element={<EmployeesListPage />} />
            </Routes>
        </Suspense>
    )
}

export default Router
