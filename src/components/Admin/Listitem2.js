import axios, { Axios } from "axios";
import React from "react";
import S_v_listitemcss from "./Listitem2.module.css";


export default function S_v_listitem(props) {

    const Chandler = async() =>{
        await axios.get(`${props.serverSystemUrl}/auth/confirmpayment/${props.details._id}`,{
            validateStatus: false,
            withCredentials: true,
          }).then((res)=>{
            if(res.status===200){
                console.log("success");
            }
        })
    }

    return (

        <>
            <div className={S_v_listitemcss.list_heading}>
                <p className={S_v_listitemcss.list_2}>{props.details.fullName}</p>
                <p className={S_v_listitemcss.list_3}>{props.details.email}</p>
                <p className={S_v_listitemcss.list_4}>{props.details.phoneNo}</p>
                <p className={S_v_listitemcss.list_5}>{props.details.upiId}</p>
                <p className={S_v_listitemcss.list_6}><a href={props.details.ssLink} target= "_blank">link
                </a></p>
                <p className={S_v_listitemcss.list_7}>{props.details.paid}</p>
                <p className={S_v_listitemcss.list_8}><button onClick = {Chandler} >Confirm</button></p>
            </div>
        </>
    )
        ;
}