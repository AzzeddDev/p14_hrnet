import {BrowserRouter} from "react-router-dom";
import Router from "./router";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {

  return (
    <BrowserRouter>
        <header>
            <Header />
        </header>

        <main>
            <section>
                <Router />
            </section>
        </main>

        <footer>
            <Footer />
        </footer>

    </BrowserRouter>
  )
}

export default App
