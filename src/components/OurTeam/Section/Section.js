import React,{ useState} from 'react';
import styles from './Section.module.css';
import ContactCard from '../ContactCard/ContactCard';
import AnimateHeight from 'react-animate-height';

import {FiChevronUp } from "react-icons/fi";

function Section(props) {

    const [reverse, setReverse] = useState(false);
    const [height, setHeight] = useState(0);

    const dropDownHandler = () => {
        setReverse((reverseState => !reverseState));
        setHeight(height === 0 ? 'auto' : 0);
    };

    return (
        <div className={styles.section}>
            <div className={styles.subSection}>
                <div className={styles.subHeading}><span onMouseEnter={()=>{props.handleEnter();}} onMouseLeave={()=>{props.textLeave();}}>{props.name}</span></div>
                <hr />
                <div className={styles.leads}>
                    {props.leads.map((lead) => <ContactCard details = {lead}/>)}
                </div>
                <AnimateHeight duration={500} height={height}>
                    <div className={styles.members}>
                        {props.members.map((member) => {
                            return(<div className={styles.subteam}>
                                {/* <div onMouseEnter={()=>{props.handleEnter();}} onMouseLeave={()=>{props.textLeave();}} className={styles.subHeading}>{member.subteam}</div>
                                <hr /> */}
                                {member.members.map((mem) => <ContactCard details = {mem}/>)}
                            </div>)})
                        }       
                    </div>
                </AnimateHeight>
                <div className={`${styles.separation} ${props.members.length === 0 ? styles.none : null}`}>

                    <hr />
                    <button onMouseEnter={()=>{props.handleEnter();}} onMouseLeave={()=>{props.textLeave();}} className={`${styles.arrow} ${reverse ? styles.reverse : null}`} onClick={dropDownHandler}><FiChevronUp className={styles.iconTag}/></button>
                </div>
            </div>
        </div>
    );
}

export default Section;
