import { useNavigate } from "react-router-dom";
import { database } from './FirebaseConfig';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
export const Home = () => {

    return (<div className="App">
        <div className='content'>
            <h1>This is Home Page</h1>
        </div>
    </div>);
}