import React from "react";
import Student_varification_list_css from "./List.module.css"
import S_v_listitem from "./Listitem"
import Data from "./data";
// import Navbar from "./Navbar1";
export default function List ({users}) {
    return (
<>

<div div className={Student_varification_list_css.list_heading}>

    {/* <p  className={Student_varification_list_css.list_1}>#</p> */}
    <p  className={Student_varification_list_css.list_2}>Name</p>
    <p  className={Student_varification_list_css.list_3}>Email</p>
    <p  className={Student_varification_list_css.list_4}>Phone No</p>
    <p  className={Student_varification_list_css.list_5}>Ac.Status</p>
    <p  className={Student_varification_list_css.list_6}>College</p>
    </div>
<div className={Student_varification_list_css.dataScroll}>


<div  >
{
        users.map((value)=>(
        <div key= {value._id} className={Student_varification_list_css.child}>
         <S_v_listitem details={value} />
        </div>  
          )
        )
      }  
</div>
</div>

</>
    );
}