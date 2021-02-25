import React from "react";


const Form =(props)=> {
    const {inputs, setInputs} =props;
    const regex = new RegExp(/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/);

    const onChange  =(e) => {
      console.log ("name:" + e.target.name + "  value;" + e.target.value)
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
            <input onChange = {onChange} type ="text" name= "firstName" 
            />
            {inputs.firstName.length < 3 ? (
          <span className="text-danger small">Field must be at least 2 characters..</span>
        ) : null}


        <div className =" form-group">  
            <label htmlFor = "lastName">Last Name</label>
            <input onChange = {onChange} type ="text" name= "lastName"/>
            {inputs.lastName.length < 2 ? (
          <span className="text-danger small">Field must be at least 2 characters..</span>
        ) : null}
        </div>


            <label htmlFor = "email">Email</label>
            <input onChange = {onChange} type ="text" name= "email" />
            {inputs.email.length < 5 ? (
          <span className="text-danger small">field must be at lease 5 characters.</span>
        ) : null} 
              {
                regex.test(inputs.email) ? 
                null
                : <span className="text-danger small">You must enter a valid email address.</span>
              }
        </div>

        <div className =" form-group">   
            <label htmlFor = "password">Password</label>
            <input onChange = {onChange} type ="password" name= "password" />
        </div>

        <div className ="form-group">
            <label htmlFor = "confirmPassword">Confirm Password</label>
            <input onChange = {onChange} type ="password" name= "confirmPassword"/>
            {inputs.confirmPassword.length < 1 ? (
          <span className="text-danger small">Confirm Password.</span>
        ) : null}
        </div>   

    </form>
    )
}
export default Form; 