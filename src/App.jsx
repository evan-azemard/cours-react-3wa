import { BrowserRouter,Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Users } from "./components/Pages/Users.jsx";
import { Posts } from "./components/Pages/Posts.jsx";
import { Post } from "./components/Pages/Post.jsx";

function App() {

    return<>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' Component={Home}/>
                <Route path='users' Component={Users} />
                <Route path='post/:id' Component={Post} />
                <Route path='posts' Component={Posts} />

                <Route path='*' element={<p>Page 404</p>} />
            </Routes>
        </BrowserRouter>
    </>
}

export default App
