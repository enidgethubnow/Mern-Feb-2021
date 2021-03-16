import React, { useState } from 'react'
import axios from 'axios';
const PersonForm = () => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            firstName,    // this is shortcut syntax for firstName: firstName,
            lastName ,     // this is shortcut syntax for lastName: lastName
            

        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                
                <input type="text"  placeholder = "Title" onChange = {(e)=>setFirstName(e.target.value)}/>
            </p>
            <p>
                <input type="text"  placeholder = "Price" onChange = {(e)=>setLastName(e.target.value)}/>
            </p>

            <p>
                <input type="text"  placeholder = "Description" onChange = {(e)=>setLastName(e.target.value)}/>
            </p>
            <br></br>
            
            <button>Create</button>
        </form>
    )
}
export default PersonForm;
