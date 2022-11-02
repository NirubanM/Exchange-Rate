import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Form=()=>{
    const [userName,setUserName]=useState('')
    const [Emailid,setEmailid]=useState('')
    const [error,setError]=useState(false)
const navigate= useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(userName.length===0||Emailid.length===0){
            setError(true)
        }
        if(userName&&Emailid)
        {
            navigate('/about');
        }
    }
    return(
        <>
           <form onSubmit={handleSubmit}>
               <div>
                   <input placeholder="User Name" onChange={e=>setUserName(e.target.value)} />
               </div>
               {error&&userName.length<=0?
               <label>User Name can't be Empty</label>:""}
               <div>
                   <input placeholder="email" onChange={e=>setEmailid(e.target.value)} />
               </div>
               {error&&Emailid.length<=0?
               <label>EmailId can't be Empty</label>:""}
               <div>
                   <button>
                       Submit
                   </button>
               </div>
           </form>
        </>
    );
}
export default Form;