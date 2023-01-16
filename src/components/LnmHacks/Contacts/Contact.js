import React from 'react';
import styles from './Contact.module.css';
import { HiOutlineMail } from 'react-icons/hi';

function Contact() {
    const contact = 
    [
        {
            name:"LNM Hacks 5.0",
            email:"info@lnmhacks.xyz",
        },
    ]
    return (
        < div className={styles.outer}>
            {contact.map((contact) => 
            <div className={styles.contact}>
                <div className={styles.nameNumber}>
                    <div className={styles.name}>{contact.name}</div>
                </div>
                <div className = {styles.mail}>
                    <a  styles={{color:"white"}} href={`https://mail.google.com/mail/?view=cm&fs=1&to= ${contact.email}`} target = "_blank">
                        <HiOutlineMail size= {25}/>
                    </a>
                </div>
            </div>)}
        </div>
    );
}

export default Contact;