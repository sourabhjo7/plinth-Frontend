import styles from './TimerCell.module.css';
import React from 'react';
export const TimerCell = ({ label, value }) => {
    const formattedValue = value < 10 ? `0${value}`: value.toString();

    return (
        <div className={ styles.TimerCell }>
            {/* <span className={ styles.TimerCellValue }>{ formattedValue }</span> */}
            <span className={ styles.TimerCellValue }>00</span>
            <span className={ styles.TimerCellLabel }>{ label }</span>
        </div>
    );
}