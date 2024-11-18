import { useState } from 'react'
import './App.css'
import { Image } from "./components/Image.jsx";
import { Paragraph } from "./components/Paragraph.jsx";
import { Title } from "./components/Title.jsx";
import { Parents } from "./components/Parents.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Parents />
            <Image />
            <Title />
            <Paragraph />
        </>
    )
}

export default App
