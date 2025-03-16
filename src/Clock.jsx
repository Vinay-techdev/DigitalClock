import React, {useState, useEffect} from 'react';

function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervaild = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return() => {
           clearInterval(intervaild);
        }
    }, []);

    function formatTime () {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        hours = hours % 12 || 12;

        return `${zero(hours)}:${zero(minutes)}:${zero(seconds)}`;
        
    }

    function zero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return(
           <div className='hero'>
              <div className='container'>
                   <div className='clock'>
                      <span>{formatTime()}</span>
                    </div>
               </div>
            </div>
    
    );
}

export default Clock;