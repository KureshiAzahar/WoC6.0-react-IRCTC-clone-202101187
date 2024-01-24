import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./FirebaseConfig";


const databas = getDatabase(app);

function setdata() {
    // Corrected syntax and added then/catch to handle the asynchronous nature of set function
    set(ref(databas, "/Profile/user"), {
      id: 10,
      name: "Azahar",
      age: 21,
    })
      .then(() => {
        console.log("Data successfully set");
      })    
      .catch((error) => {
        console.error("Error setting data: ", error);
      });
  }

export const Profile = () => {
    return (
        <div className="ProfileContainer">
            <div className="UserData">
                <p>Profile</p>
                <button onClick={setdata}>Submit</button>
            </div>
        </div>
    );
}