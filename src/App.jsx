import { useState } from 'react'
import './App.css'
import { Image } from "./components/Image.jsx";
import { Paragraph } from "./components/Paragraph.jsx";
import { Title } from "./components/Title.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Image />
            <Title />
            <Paragraph />
        </>
    )
}

export default App
