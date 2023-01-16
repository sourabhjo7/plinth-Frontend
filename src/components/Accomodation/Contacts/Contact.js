import React from 'react';
import styles from './Contact.module.css';
import { HiOutlineMail } from 'react-icons/hi';

function Contact() {
    const contact = 
    [
        {
            name:"Prateek Sharma ",
            phone: "+91 91192 42875",
            email:"20ucs146@lnmiit.ac.in",
        },
        {
            name:"Muskan Singla ",
            phone: "+91 83770 89610",
            email:"20ucc068@lnmiit.ac.in",
        }
    ]
    return (
        < div className={styles.outer}>
            {contact.map((contact) => 
            <div className={styles.contact}>
                <div className={styles.nameNumber}>
                    <div className={styles.name}>{contact.name}</div>
                    <div className={styles.number}>{contact.phone}</div>
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