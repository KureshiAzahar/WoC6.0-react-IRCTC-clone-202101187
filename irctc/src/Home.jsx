import { useNavigate } from "react-router-dom";
import { database } from './FirebaseConfig';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
export const Home = () => {

    const history = useNavigate();

    const handleClick = () => {
        signOut(database).then(val => {
            console.log(val, "val")
            history('/LogIN')
        })
    }

    return (<div className="App">
        <div className='content'>
            {/* <Link to={"/Home"}>Home</Link>
            <Link to={"/About"}>About Us</Link>
            <Link to={"/Booklist"}>Booklist</Link>
            <Link to={"/Profile"}>Profile</Link>
            <Link to={"/Payment"}>Payment</Link>
            <Link to={"/LogIn"}>Login/Register</Link> */}

            <h1>This is Home Page</h1>
            <button onClick={handleClick}>SignOut</button>
        </div>
    </div>);
}