import React, { useState } from "react";
import { database } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function RegisterAndLogin() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = () => {
    history("/reset");
  }
  return (
    <div className="container">
      <div className="Form">
        <div className="row">
          <div
            className={login == false ? "activeColor" : "pointer"}
            onClick={() => setLogin(false)}
          >
            SignUp
          </div>

          <div
            className={login == true ? "activeColor" : "pointer"}
            onClick={() => setLogin(true)}
          >
            SignIn
          </div>
        </div>
        <h1>{login ? "SignIn" : "SignUp"}</h1>
        <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
          <input name="email" placeholder="Enter Your Email" />
          <br />
          <input name="password" type="text" placeholder="Enter Your Password" />
          <br />
          <button>{login ? "SignIn" : "SignUp"}</button>
        </form>
      </div>
    </div>
  );
}