import { BrowserRouter,Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Users } from "./components/Pages/Users.jsx";
import { Posts } from "./components/Pages/Posts.jsx";
import { Post } from "./components/Pages/Post.jsx";

import { Count } from "./components/Pages/Count.jsx";
import { Counter } from "./components/Counter.jsx";
import { Provider } from "react-redux";
import {store } from "./app/store.js"
function App() {

    return<>
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' Component={Home}/>
                    <Route path='users' Component={Users} />
                    <Route path='post/:id' Component={Post} />
                    <Route path='posts' Component={Posts} />
                    <Route path='count' Component={Count} />
                    <Route path='counter' Component={Counter} />

                    <Route path='*' element={<p>Page 404</p>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </>
}

export default App
