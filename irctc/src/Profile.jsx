import React from "react";
import { getDatabase, ref, set, get, child, onValue } from "firebase/database";
import { app } from "./FirebaseConfig";
import { Link } from "react-router-dom"


const databas = getDatabase(app);

function setdata() {
    // Corrected syntax and added then/catch to handle the asynchronous nature of set function
    set(ref(databas, "/Profile/user"), {
      id: 11,
      name: "Kureshi",
      age: 20,
    })
      .then(() => {
        console.log("Data successfully set");
      })    
      .catch((error) => {
        console.error("Error setting data: ", error);
      });
  }

function getdata(){
  // get(child(ref(databas), "Profile"))
  // .then(snapshot => console.log(snapshot.val()))
  // .catch(err => console.error(err))

  onValue(ref(databas,"Profile/user"),snapshot => console.log(snapshot.val()))
}

export const Profile = () => {
    return (
        <div className="ProfileContainer">
          <div className="userphoto">
            <img src="./background-image.jpg" alt="NO Preview"/>
          </div>
            <div className="UserData">
                {/* <p>Profile</p> */}
                <label>First Name</label>
                <div>Azahar</div>
                <label>Last Name</label>
                <div>Kureshi</div>
                <label>Username</label>
                <div>Azahar Kureshi</div>
                <label>Email</label>
                <div>sample@gmail.com</div>
                <label>Gender</label>
                <div>Male</div>
                <label>Date Of Birth</label>
                <div>01/10/2003</div>
                <label>Phone Number</label>
                <div>6351305430</div>
                <Link to={"/editprofile"}>Edit Profile</Link>
                {/* <button onClick={setdata}>Submit</button>
                <button onClick={getdata}>Fetch Data</button> */}
            </div>
        </div>
    );
}