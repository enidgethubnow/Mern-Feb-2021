import React from "react";

const Form =(props)=> {
    const {inputs, setInputs} =props;

    const onChange  =(e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });

    };

    return(
    <form>
    <h1>Helloooooo</h1>
        <div className = "form-group">
            <label htmlFor = "firstName">First Name</label>
            <input onChange = {onChange} type ="text" name= "firstName"/>
        

        <div className =" form-group">  
            <label htmlFor = "lastName">Last Name</label>
            <input onChange = {onChange} type ="text" name= "lastName"/>
        </div>


            <label htmlFor = "email">Email</label>
            <input onChange = {onChange} type ="text" name= "email"/>
        </div>

        <div className =" form-group">   
            <label htmlFor = "password">Password</label>
            <input onChange = {onChange} type ="password" name= "password"/>
        </div>

        <div className ="form-group">
            <label htmlFor = "confirmPassword">Confirm Password</label>
            <input onChange = {onChange} type ="password" name= "confirmPassword"/>
        </div>   

    </form>
    )
}
export default Form;