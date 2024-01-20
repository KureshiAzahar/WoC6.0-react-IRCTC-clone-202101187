import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const schema = yup.object().shape({
        Email: yup.string().email().required('Your Email Is Required'),
        Password: yup.string().min(6).max(12).required('Password Must Be 6-12 Characters Long.'),
        ConfirmPassword: yup.string().oneOf([yup.ref('Password'), null]).required("Password Don't Match"),
    });

    const onsubmit = (data) => {
        // console.log(`hello world`);
        console.log(data);
        return data;
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    let [user, setUser] = useState({
        Email: '',
        Password: '',
        ConfirmPassword: '',
    });

    let name, value;
    let getuserdata = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        await handleSubmit(onsubmit)(event);
        postdata(event);
    };

    const postdata = async (event) => {
        event.preventDefault();
        let da = onsubmit(event);
        console.log(da);
        const { Email, Password, ConfirmPassword } = user;
        if (Email && Password && ConfirmPassword) {
            const res = await fetch('https://irctc-f3649-default-rtdb.firebaseio.com/UserDataRecord.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Email,
                    Password,
                    ConfirmPassword,
                }),
            }).catch((error) => console.error(error));

            if (res) {
                setUser({
                    Email: '',
                    Password: '',
                    ConfirmPassword: '',
                });
                alert('SuccessFully Data has been stored');
            } else {
                alert('Please Fill Out The Field(s) jj');
            }
        } else {
            alert('Please Fill Out The Field(s) qq');
        }
    };

    return (
        <div>
            <h1>Create A New Account</h1>
            <form method="POST" onSubmit={handleFormSubmit}>
                <div>
                    <input name="Email" onChange={getuserdata} type="email" placeholder="Enter Your Email" {...register('Email')} />
                    <p>{errors.Email?.message}</p>
                </div>
                <div>
                    <input name="Password" onChange={getuserdata} type="Password" placeholder="Enter Your Password" {...register('Password')} />
                    <p>{errors.Password?.message}</p>
                </div>
                <div>
                    <input
                        name="ConfirmPassword"
                        onChange={getuserdata}
                        type="Password"
                        placeholder="Enter Your Confirm Password"
                        {...register('ConfirmPassword')}
                    />
                    <p>{errors.ConfirmPassword?.message}</p>
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            {/* <Router> */}
            Already Have an Account? <Link to="/LogIN">SING IN</Link>
            {/* </Router> */}
        </div>
    );
};
