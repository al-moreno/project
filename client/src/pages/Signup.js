import React, { useState } from 'react';
import axios from 'axios';



function Signup() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

  

    async function handleFormSubmission(event)  {
        event.preventDefault();
     const response = await axios.post("/api/users/signup", {
            firstName, 
            lastName,
            email,
            userName,
            password
        });
        console.log(response);
    }


    // const signupFormHandler = async (event) => {
    //     event.preventDefault();

        
    //     if (name && email && password) {
    //         const response = await fetch('/api/users', {
    //             method: 'POST',
    //             body: JSON.stringify({ username: name, email: email, password: password }),
    //             headers: { 'Content-Type': 'application/json' },
    //         });

    //         if (response.ok) {
    //             document.location.replace('/');
    //         } else {
    //             alert(response.statusText);
    //         }
    //     }
    // };


    return (
        <main>
            <div className="col-1">
                <form onSubmit={(e) => handleFormSubmission(e)}  className="card-body card">

                    
                    <h3> Sign Up </h3>
                    <div className="row">
                    </div>
                    <div className="row">
                        <label> First Name </label>
                        <input type="text" onChange={(e) => setFirstName(e.target.value)} name="firstname" className="   " />
                    </div>
                    <div className="row">
                        <label> Last Name </label>
                        <input type="text" onChange={(e) => setLastName(e.target.value)}name="lastname" className="   " />
                    </div>
                    <div className="row">
                        <label> Email Address </label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)}name="email" className="   " />
                    </div>
                    <div className="row">
                        <label> Username </label>
                        <input type="text" name="username" onChange={(e) => setUserName(e.target.value)}className="   " />
                    </div>
                    <div className="row">
                        <label> Password </label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)}name="password" className="   " />
                    </div>
                    <div className="row">
                        <label><input type="checkbox" name="terms" /> I agree with the <a href="#"> Terms and Conditions </a></label >
                        <input type="submit" value="Sign up" className="   " />
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Signup;


