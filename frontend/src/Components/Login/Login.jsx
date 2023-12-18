import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
// import {sign} from 'jsonwebtoken';
import style from "./Login.module.css" 
import axios from 'axios';


 const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try{
            const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
            if(!email.match(validRegex)){
                setError("Invalid Email")
            }
            else if(!pass.match(password)){
                setError("Invalid Password")
            }
            else{
                const {data} = await axios.post('http://localhost:3000/products/auth',{email:email,password:pass});
                console.log(data);
                if(data.token){
                    localStorage.setItem('token',data.token);
                    console.log(localStorage.getItem('token'));
                    navigate('/home');
                }
                else{
                    setError('Invalid Username or Password');
                }
            }
        }
        catch(error){
            setError(error.message);
        }
    }

    return (
        <div className={style.container}>
            <div className={style.innerContainer}>
            <span className={style.heading}>Login</span>
            <span className={style.message}>{error&&error}</span>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <Link to="/register" className={style.linkbtn} >Don't have an account? Register here.</Link>
            </div>
        </div>
    )
}

export default Login;