import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
// import {sign} from 'jsonwebtoken';
import style from "./Login.module.css" 
import axios from 'axios';


 const Signup = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [cPass, setCPass] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const phoneno = /^\d{10}$/;
        const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        if(!email.match(validRegex)){
            setError("Invalid Email")
        }
        else if(!phone.match(phoneno)){
            setError("Invalid Phone Number")
        }
        else if(!pass.match(password)){
            setError("Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters")
        }
        else if(pass !== cPass){
            setError("Confirm Password and password doesn't match")
        }
        else{
            try{
                const {data} = await axios.post('http://localhost:3000/products/user',{name:name,phoneNo:phone,address:address,email:email,password:pass});
                console.log(data);
                if(data.token){
                    localStorage.setItem('token',data.token);
                    console.log(localStorage.getItem('token'));
                    navigate('/home');
                }
                else{
                    setError('Invalid Data');
                }
            }
            catch(error){
                setError(error.message);
            }
        }
    }

    return (
        <div className={style.container}>
            <div className={style.innerContainer}>
            <span className={style.heading}>Signup</span>
            <span className={style.message}>{error&&error}</span>
            <form onSubmit={handleSubmit}>
                <div className={style.login}>
                <div className={style.formFields}>
                <label htmlFor="name">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)}type="text" placeholder="Enter Full Name" id="name" name="name" required/>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>
                <label htmlFor="phone">Phone Number</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)}type="text" placeholder="9999000022" id="phone" name="phone" required/>
                </div>
                <hr/>
                <div className={style.formFields}>
                <label htmlFor="address">Address</label>
                <textarea value={address} onChange={(e) => setAddress(e.target.value)}type="text" placeholder="Enter Address" id="address" name="address" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="Password" id="password" name="password" required/>
                <label htmlFor="cpassword">Confirm Password</label>
                <input value={cPass} onChange={(e) => setCPass(e.target.value)} type="text" placeholder="Confirm Password" id="cpassword" name="cpassword" required/>
                </div>
                </div>
                <button type="submit">Sign up</button>
            </form>
            <Link to="/" className={style.linkbtn} >Already have an account? Click here.</Link>
            </div>
        </div>
    )
}

export default Signup;