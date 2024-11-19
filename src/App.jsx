import { BrowserRouter,Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Users } from "./components/Pages/Users.jsx";

function App() {

    return<>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' Component={Home}/>
                <Route path='users' Component={Users} />
                <Route path='*' element={<p>Page 404</p>} />
            </Routes>
        </BrowserRouter>
    </>
}

export default App
