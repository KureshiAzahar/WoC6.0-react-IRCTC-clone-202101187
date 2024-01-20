import { Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import React from 'react';

export const LogIN = () => {

    // const handlesubmit = (event) => {
    //     event.preventDefault();
    // }

    let [user, setUser] = useState({
        Email: "",
        Password: "",
    });

    let name, value;
    let getuserdata = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });
    };


    const postdata = async (event) => {
        event.preventDefault();
        const { Email, Password } = user;
        if (Email && Password) {

            const res = await fetch("https://irctc-f3649-default-rtdb.firebaseio.com/UserDataRecord.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Email,
                    Password,
                }),
            }).catch(error => console.error(error));

            if (res) {
                setUser({
                    Email: "",
                    Password: "",
                });
                alert("SuccessFully Data has been stored");
            }
            else{
                alert("Please Fill Out The Field(s)");
            }
        }
        else{
            alert("Please Fill Out The Field(s)");
        }
    }


    return (
        <div>
            <h1>Sign In</h1>
            <form method='POST' autoComplete='off' onSubmit={event => { postdata(event) }}>
                <div><input name='Email' onChange={getuserdata} type='email' placeholder='Enter Your Email' /></div>
                <div><input name='Password' onChange={getuserdata} type='Password' placeholder='Enter Your Password' /></div>
                <div><button>Sign In</button></div>
            </form>
            {/* <Router> */}
            <Link to={"/home"} />Don't Have an Account? <Link to="/Register">SING UP</Link>
            {/* </Router> */}
        </div>
    );
}