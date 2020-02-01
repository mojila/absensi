import React, {useState, useEffect} from 'react'
import moment from 'moment';

function Time() {
    const [time, setTime] = useState(moment());

    const greeting = () => {
        let temp_time = ''
        let hour = Number(moment(time).format('HH'))

        if (hour > 6 && hour < 12) {
            temp_time = 'morning'
        } else if (hour > 11 && hour < 18) {
            temp_time = 'evening'
        } else {
            temp_time = 'night'
        }

        return temp_time
    }

    useEffect(() => {
        let interval = setInterval(() => {
            setTime(moment())
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [])

    return <React.Fragment>
        <div className="text-center">
            <div className="text-6xl font-bold text-white">
                {moment(time).format('HH : mm A')}
            </div>
            <div className="text-4xl text-white font-semibold capitalize">
                Good 
                <span> {greeting()}.</span>
            </div>
        </div>
    </React.Fragment>
}

export default Time