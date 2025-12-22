
import About from './component/About'
import Contact from './component/Contact'
import Hero from './component/Hero'
import Timeline from './component/Timeline'
import './index.css'
import { useState } from "react";



function App() {

    return (
        <>
            <Hero />
            <About />
            <Timeline />
            <Contact />
        </>
    );
}

export default App
