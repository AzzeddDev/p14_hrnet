import {useLocation} from "react-router-dom";
import Router from "./router";
import Header from "./components/header";
import Footer from "./components/footer";
import {routes} from "./router/routes";

function App() {
    const location = useLocation()
    const isEmployeesListPage = location.pathname === routes.employeesList

    return (
        <>
            <header className={"container-fluid"}>
                <Header/>
            </header>

            <main className={"container-fluid"}>
                <Router/>
            </main>

            {isEmployeesListPage && (
                <footer>
                    <Footer/>
                </footer>
            )}
        </>
    )
}

export default App
