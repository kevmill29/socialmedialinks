import React from "react"
import Main from "./components/main.js"
import Header from "./components/header.js"
import Footer from "./components/footer.js"


export default function App(){
    return (
        <div className="container">
            <Header />
            <Main />
            <Footer/>
        </div>
    )
}
