import React from "react";


const Form =(props)=> {
    const {inputs, setInputs} =props;
    const regex = new RegExp(/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/);

    const onChange  =(e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });

    };

    return(
    <form>
    <h1>Enid is in the house!!</h1>
        <div className = "form-group">
            <label htmlFor = "firstName">First Name</label>
            <input onChange = {onChange} type ="text" name= "firstName" onChange={onChange} 
            />
            {props.firstName < 1 ? (
          <span className="text-danger small">First Name cannot be blank.</span>
        ) : null}


        <div className =" form-group">  
            <label htmlFor = "lastName">Last Name</label>
            <input onChange = {onChange} type ="text" name= "lastName"onChange={onChange}/>
            {props.lastName < 1 ? (
          <span className="text-danger small">First Name cannot be blank.</span>
        ) : null}
        </div>


            <label htmlFor = "email">Email</label>
            <input onChange = {onChange} type ="text" name= "email" onChange={onChange}/>
            {props.email < 1 ? (
          <span className="text-danger small">Email address is invalid.</span>
        ) : null}  
        </div>

        <div className =" form-group">   
            <label htmlFor = "password">Password</label>
            <input onChange = {onChange} type ="password" name= "password" onChange={onChange}/>
        </div>

        <div className ="form-group">
            <label htmlFor = "confirmPassword">Confirm Password</label>
            <input onChange = {onChange} type ="password" name= "confirmPassword"onChange={onChange}/>
            {props.confirmPassword < 1 ? (
          <span className="text-danger small">Confirm Password.</span>
        ) : null}
        </div>   

    </form>
    )
}
export default Form; 