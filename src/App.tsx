import {useLocation} from "react-router-dom"
import Router from "./router"
import Header from "./components/header"
import Footer from "./components/footer"

function App() {

    return (
        <>
            <header className={"container-fluid"}>
                <Header/>
            </header>

            <main className={"container-fluid"}>
                <Router/>
            </main>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default App
