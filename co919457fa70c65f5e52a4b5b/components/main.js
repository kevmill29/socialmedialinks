import React from "react"

export default function Main(){
    return (
        <main>
            <div className="main--flex-wrap">
                <h2>Kevin Emile</h2>
                    <h5>Frontend Developer</h5>
                        <a className="main--website">kevinemile.dev</a>
                        <div className="main--links">
                            <button href="#" className="email"><i className="fa-solid fa-envelope"></i> Email</button>
                            <button href="#" className="linkedin"><i className="fa-brands fa-linkedin-in"></i> LinkedIn</button> 
                          </div>
            </div>
            <div>
                <h3>About</h3>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3>Interests</h3>
                    <p>Expert Chef at home. Music scholar. Reader. Avid gamer. Real Coconut water. Entrepreneur. Travel geek. Tea connoisseur. Coffee fanatic.</p>
            </div>
                    
        </main>
    )
}