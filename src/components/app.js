import React, { useEffect } from 'react'
import Background from './backgound'
import Time from './time'
import standby_music from '../assets/sound/sword_art_online.mp3'
import Quote from './quote'

function App() {
    let standby_audio = new Audio(standby_music)

    const play_standby = () => {
        if (standby_audio.paused) {
            standby_audio.loop = true
            standby_audio.play()
        }
    }

    useEffect(() => {
    }, [])

    return <Background>
        <div className="pt-48"
            onClick={play_standby}>
            <div className="flex justify-center mb-10">
                <Time/>
            </div>
            <div className="flex justify-center">
                <Quote/>
            </div>
        </div>
    </Background>
}

export default App