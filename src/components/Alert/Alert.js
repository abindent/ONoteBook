import React from 'react'


function Alert(props) {
    const capitalize = (word)=>{
        if(word === "danger"){
            word = "error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return(
       
    props.alert && <><br /> <br /><br /> <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>:&nbsp;{props.alert.msg}</div></>
    )
}

export default Alert;