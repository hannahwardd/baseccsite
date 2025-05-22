import './App.css'
import React, { useState } from "react"
import cat from "./cat.jpg"
import useSound from "use-sound"
import ReactPlayer from "react-player"


function App() {

    const [showHome, setShowHome] = useState(true)
    const [showInfoPannel, setShowInfoPannel] = useState(false)
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(false)

    return (
        <div className="App">
            <div className="header" style={{ backgroundColor: "white" }}>
                <h1>My code club website</h1>
            </div>
            <div className="navBar">
                <button onClick={() => {
                    setShowHome(true)
                    setShowInfoPannel(false)
                    setShowWelcomeMessage(false)
                }}>
                    Home
                </button>
                <button onClick={() => {
                    setShowHome(false)
                    setShowInfoPannel(true)
                    setShowWelcomeMessage(false)
                }}>
                    Weclome to my site page
                </button>
                <button onClick={() => {
                    setShowHome(false)
                    setShowInfoPannel(false)
                    setShowWelcomeMessage(true)
                }}>
                    Info Pannel
                </button>
            </div>
            <div className="body">
                {showHome && <div>
                    <img src={cat} style={{ height: 300, width: 300 }} />
                    <img
                        src="https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
                        alt="React Image"
                        style={{ height: 300, width: 300 }}
                    />
                    <p style={{ color: "pink", fontWeight: "bold" }}>
                        Welcome to Hannah's website
                    </p>

                    <br />
                    <input type="text" placeholder="enter your name" />
                    <a href="https://en.wikipedia.org/wiki/Saint_George_and_the_Dragon" style={{ color: "white" }}>
                        my link
                    </a>
                    <br />
                </div>}
                {showWelcomeMessage && <div>
                    <p style={{ fontSize: "larger" }}>Hey guys</p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Arnold_Damen_%281815%E2%80%931890%29.png" />
                </div>}
                {showInfoPannel && <div>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fd/PRR-T1.jpg"
                        style={{ height: '100px' }}
                    />
                    <p>
                        The Manhattan Limited was originally the Seashore Limited, an eastbound-only train which was renamed in 1903. The
                        Manhattan Limited became a westbound train as well in 1913 with the renaming of the Chicago Limited. Both trains then ran
                        with all-Pullman consists.[1]: 110–111
                        The Manhattan Limited served as an alternative to the Broadway Limited. The Broadway Limited was a sleeping car passenger
                        train, although there were dining accommodations on the train. As with the Broadway, the Manhattan Limited departed New
                        York City's Penn Station in Manhattan en route for Union Station in Chicago, Illinois. The train also carried more second
                        and third class passengers while first class passengers took the Broadway Limited.[1]: 111 Departing and arriving earlier
                        than its flagship sister, the Manhattan Limited made far more local stops during daytime hours on a consequently more
                        protracted schedule. It was late to receive streamlined equipment as late as 1941 it carried just one lightweight 10-5
                        sleeper.[2]: 117
                    </p>
                </div>}
            </div>
        </div>)
}

export default App
