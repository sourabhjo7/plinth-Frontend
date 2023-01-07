import { TimerCell } from '../TimerCell/TimerCell.js';
import { useTimer } from '../../Hooks/useTimer';
import React from 'react';
import style from './Countdown.module.css';

export const Countdown = ({ futureDate }) => {
    const { days, hours, minutes, seconds} = useTimer(futureDate);
    const timerContents = (
        <>
            <TimerCell value={days} label="Days" />
            {/* <TickerSeparator /> */}
            <TimerCell value={hours} label="Hours" />
            {/* <TickerSeparator /> */}
            <TimerCell value={minutes} label="Minutes" />
            {/* <TickerSeparator /> */}
            <TimerCell value={seconds} label="Seconds" />
        </>)

    return (
        <div className={ style.timerShell }>
            { timerContents }           
        </div>              
    );
}