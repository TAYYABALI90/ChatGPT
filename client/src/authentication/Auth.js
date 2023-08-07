import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signin, signup } from '../actions/auth';

import websiteLogo from '../assets/chat/website-logo.png';

import { makeStyles } from './Styles';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {

    const styles = makeStyles();
    const [isSignup, setIsSignup] = useState(false);
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleShowPassword = () => setShowPassword(!showPassword);
    const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch(signup(form, navigate));
            console.log('Signed up successfully');
        } else {
            dispatch(signin(form, navigate));
            console.log('Logged in successfully');
        }
    };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
        setShowConfirmPassword(false);
    };

    return (

        <>

            <div className='Auth'>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto" style={styles.col}>
                            <div className="card my-4" style={styles.card}>

                                <div className="card-header border-0 text-center">
                                    <img className='mx-4 mb-3' src={websiteLogo} alt='Website Logo' style={styles.logo} />
                                    <h5 className='text-white'>Welcome to AI Genix Hub </h5>
                                    <h6 className='text-white fw-normal'>
                                        {isSignup ?
                                            "Sign up to your AI Genix Hub account to continue" :
                                            "Log in with your AI Genix Hub account to continue"}
                                    </h6>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="card-body">

                                        {isSignup && (
                                            <>
                                                <div className="d-flex align-items-center justify-content-center input-group mb-4">
                                                    <div className="mx-2">
                                                        <span className="input-group-text" style={styles.inputGroupText}>
                                                            <i className="bi bi-person text-white" /></span>
                                                    </div>
                                                    <input type="text" name='firstName' className="" onChange={handleChange}
                                                        placeholder="Enter Your First Name" style={styles.initialStates} />
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center input-group mb-4">
                                                    <div className="mx-2">
                                                        <span className="input-group-text" style={styles.inputGroupText}>
                                                            <i className="bi bi-person text-white" /></span>
                                                    </div>
                                                    <input type="text" className="" name='lastName' onChange={handleChange}
                                                        placeholder="Enter Your Last Name" style={styles.initialStates} />
                                                </div>
                                            </>
                                        )}

                                        <div className="d-flex align-items-center justify-content-center input-group mb-4">
                                            <div className="mx-2">
                                                <span className="input-group-text" style={styles.inputGroupText}>
                                                    <i className="bi bi-envelope text-white" /></span>
                                            </div>
                                            <input type="email" name='email' onChange={handleChange}
                                                placeholder="Enter Your Email Address" style={styles.initialStates} />
                                        </div>

                                        <div className="d-flex align-items-center justify-content-center input-group mb-4">
                                            <div className="mx-2">
                                                <span className="input-group-text" style={styles.inputGroupText}>
                                                    <i className="bi bi-key text-white" /></span>
                                            </div>
                                            <input type={showPassword ? 'text' : 'password'}
                                                name='password' onChange={handleChange}
                                                placeholder="Enter Your Password" style={styles.initialStates} />
                                            <i className={showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'}
                                                onClick={handleShowPassword} style={styles.initialStatesIcons} />
                                        </div>

                                        {isSignup &&
                                            <div className="d-flex align-items-center justify-content-center input-group mb-4">
                                                <div className="mx-2">
                                                    <span className="input-group-text" style={styles.inputGroupText}>
                                                        <i className="bi bi-key text-white" /></span>
                                                </div>
                                                <input type={showConfirmPassword ? 'text' : 'password'}
                                                    name='confirmPassword' onChange={handleChange}
                                                    placeholder="Enter Your Confirm Password" style={styles.initialStates} />
                                                <i className={showConfirmPassword ? 'bi bi-eye-slash' : 'bi bi-eye'}
                                                    onClick={handleShowConfirmPassword}
                                                    style={styles.initialStatesIcons} />
                                            </div>}

                                        <button type='submit' className="px-4 py-2 mx-3" style={styles.auth} >
                                            {isSignup ? 'Sign up' : 'Sign in'}
                                        </button>

                                        <button type='button'
                                            className='text-decoration-none bg-transparent border-0' onClick={switchMode}>
                                            <div className="d-flex align-items-center mx-3" style={styles.authButtons}>
                                                <span className='text-dark mx-2'>
                                                    {isSignup ? "Already have an account?" : "Don't have an account?"}
                                                </span>
                                                <h6 className="p-2 mx-2 mt-2" style={styles.auth}>
                                                    {isSignup ? 'Sign in' : 'Sign up'}
                                                </h6>
                                            </div>
                                        </button>

                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}

export default Auth;