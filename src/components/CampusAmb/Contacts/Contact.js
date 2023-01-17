import React from 'react';
import styles from './Contact.module.css';
import { HiOutlineMail } from 'react-icons/hi';

function Contact() {
    const contact = 
    [
        {
            name:"Arjun Saxena",
            phone: "+91 95714 85158",
            email:"20ucc021@lnmiit.ac.in",
        },
        {
            name:"Muskan Singla",
            phone: "+91 83770 89610",
            email:"20ucc068@lnmiit.ac.in",
        },
    ]
    console.log(contact)
    return (
        <>
            {contact.map((contact) => 
            <div className={styles.contact}>
                <div className={styles.nameNumber}>
                    <div className={styles.name}>{contact.name}</div>
                    <div className={styles.number}>{contact.phone}</div>
                </div>
                <div className = {styles.mail}>
                    <a style={{color:"white"}} href={`https://mail.google.com/mail/?view=cm&fs=1&to= ${contact.email}`} target = "_blank">
                        <HiOutlineMail size= {25}/>
                    </a>
                </div>
            </div>)}
        </>
    );
}

export default Contact;