import React from "react";
import Student_varification_list_css from "./List.module.css"
import S_v_listitem from "./Listitem2"
import Data from "./data";
import axios from "axios";


export default function List({ payments ,serverSystemUrl}) {
    return (
        <>

            <div div className={Student_varification_list_css.list_heading}>

                <p className={Student_varification_list_css.list_2}>Name</p>
                <p className={Student_varification_list_css.list_3}>Email</p>
                <p className={Student_varification_list_css.list_4}>Phone No</p>
                <p className={Student_varification_list_css.list_5}>UPI ID</p>
                <p className={Student_varification_list_css.list_6}>SS</p>
                <p className={Student_varification_list_css.list_6}>Amount Paid</p>
                <p className={Student_varification_list_css.list_6}>BTN</p>
            </div>
            <div className={Student_varification_list_css.dataScroll}>


                <div  >
                    {
                        payments.map((value) => (
                            <div key={value._id} className={Student_varification_list_css.child}>
                                <S_v_listitem details={value} serverSystemUrl={serverSystemUrl} />
                            </div>
                        )
                        )
                    }
                </div>
            </div>

        </>
    );
}