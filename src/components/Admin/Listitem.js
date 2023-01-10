import React from "react";
import S_v_listitemcss from "./Listitem.module.css"

export default function S_v_listitem (props) {

    return (
       
        <>
        <div className={S_v_listitemcss.list_heading}>
    {/* <p className={S_v_listitemcss.list_1}>{props.details._id}</p> */}
    <p className={S_v_listitemcss.list_2}>{props.details.fullName}</p>
    <p className={S_v_listitemcss.list_3}>{props.details.email}</p>
    <p className={S_v_listitemcss.list_4}>{props.details.phoneNo}</p>
    <p className={S_v_listitemcss.list_5}>{props.details.accomodation}</p>
    <p className={S_v_listitemcss.list_6}>{props.details.instituteName}</p>
</div>
        </>
    )
    ;}