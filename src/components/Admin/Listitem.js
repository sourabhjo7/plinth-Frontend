import React from "react";
import S_v_listitemcss from "./Listitem.module.css"

export default function S_v_listitem (props) {

    return (
       
        <>
        <div className={S_v_listitemcss.list_heading}>
    <p className={S_v_listitemcss.list_1}>{props.details.id}</p>
    <p className={S_v_listitemcss.list_2}>{props.details.name}</p>
    <p className={S_v_listitemcss.list_3}>{props.details.email}</p>
    <p className={S_v_listitemcss.list_4}>{props.details.phone}</p>
    <p className={S_v_listitemcss.list_5}>{props.details.status}</p>
    <p className={S_v_listitemcss.list_6}>{props.details.college}</p>
</div>
        </>
    )
    ;}