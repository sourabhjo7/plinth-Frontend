import { useEffect, useState } from "react";
import { intervalToDuration} from 'date-fns';

export const useTimer = (futureDate) => {
    const [now, setNow] =  useState(new Date());

    useEffect(() => {        
        const interval = setInterval(() => {
            setNow(new Date());          
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
    }, [futureDate]);

    let {months,days, hours, minutes, seconds } = intervalToDuration({
        start: now,
        end: futureDate
    });
        days+=Math.floor(months/2*30+months/2*31);

    return { days, hours, minutes, seconds };
};