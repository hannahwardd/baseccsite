import useSound from "use-sound";
import {useState} from "react";

export function Podcast() {
    const [togglePage, setTogglePage] = useState(0)

    const [show, setShow] = useState(true)

    const [playing, setPlaying] = useState(true)

    const [playAudio, {stop}] = useSound(guide)
    return (

            <div className="App">


                <button onClick={() => {
                    if (playing) {
                        stop()
                        setPlaying(false)
                    }

                    else {
                        playAudio();
                        setPlaying(true)
                    }

                }}>
                    <img
                            src="https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9South/f_auto/q_auto/trackside-images/2023/F1_Grand_Prix_of_Miami/1488244647"
                            style={{height: 250}}/>
                </button>

            </div>

)
}