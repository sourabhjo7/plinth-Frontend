import React from 'react';
import styles from './Contact.module.css';
import { HiOutlineMail } from 'react-icons/hi';

function Contact() {
    const contact = 
    [
        {
            name:"Ketan Jakkar",
            phone: "+91 94617 21651",
            email:"19ucc020@lnmiit.ac.in",
        },
        {
            name:"Meet Patel",
            phone: "+91 70418 13479",
            email:"19ume020@lnmiit.ac.in",
        },
        {
            name:"Viren Saroha",
            phone: "+91 93065 55214",
            email:"19ucc020@lnmiit.ac.in",
        },
        {
            name:"Vinay Sharma",
            phone: "+91 95491 78651",
            email:"19ume011@lnmiit.ac.in",
        },
        {
            name:"Tanay",
            phone: "+91 97822 83212",
            email:"19ucs051@lnmiit.ac.in",
        },
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
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to= ${contact.email}`} target = "_blank">
                        <HiOutlineMail size= {25}/>
                    </a>
                </div>
            </div>)}
        </div>
    );
}

export default Contact;