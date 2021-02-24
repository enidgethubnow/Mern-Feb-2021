import React from "react";

const Results =(props)=>{

    const {firstName, lastName, email, password, confirmPassword} = props.data;
    return(
        <div>
            <h1 style={{color: "blue"}}>Results</h1>
            
            <p style={{color: "green"}}>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p >Email: {email}</p>
            <p style={{color: "green"}}>Password: {password}</p>
            <p style={{color: "red"}}>Confirm Password: {confirmPassword}</p>
            
        </div>
    )
    }

export default Results;