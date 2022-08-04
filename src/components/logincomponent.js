import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

const LoginComponent = () => {

    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)
    const [error, setError] = useState(false)
    const [show, setShow] = useState(false)
    const [toastType, setToastType] = useState("")
    const [toastMsg, setToastMsg] = useState("")


    const generateToast = () => {
        return <Alert variant={toastType} onClose={() => setShow(false)} dismissible className='mt-4 mb-4'>
            <p className='m-0'>
                {toastMsg}
            </p>
        </Alert>
    }

    const changeEmail = (e) => {
        const text = e.target.value;
        // eslint-disable-next-line
        const emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!text.match(emailCheck)) {
            setError(true)
        } else {
            setError(false)
        }
        setEmail(text)

    }

    const submitForm = () => {
        setShow(true)
        if (!pass || !email || error) {
            setToastMsg("All fields are required")
            setToastType("danger")
        } else {
            setToastMsg("You have successfully logged in")
            setToastType("success")
        }
    }


    return (<div className="loginapp">

        <div className="row col-12 p-0 m-0">
            <div className="col-7 d-flex justify-content-center align-items-center">
                <div className="login w-50">
                    <div className="headings text-center mb-4">

                        <h1 className="fw-bold">Login</h1>
                        <span className="secondary-text small">Enter your credential to access your account.</span>
                    </div>
                    <div className="login-google mb-4">
                        <div className='border text-center rounded'> <img src='./img/google.png' alt={'google'} />  Login with google</div>
                    </div>
                    <div className="or"><span>or</span></div>
                    <div className="login-form mt-4">
                        <form>
                            <div className="form-group mb-3">
                                <label htmlFor="email" className='mb-2'>Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => changeEmail(e)} />
                                {error && <span className='text-danger'>Enter a
                                    valid email</span>}
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="pass" className='w-100 mb-2'>Password <span className='forget float-end'>Forgot Password?</span></label>
                                <input type="password" className="form-control" id="pass" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                            </div>
                            <button className="btn btn-primary login-btn w-100 mb-3" onClick={(e) => {
                                e.preventDefault();
                                submitForm()
                            }}>Login</button>
                            <div className='secondary-text small text-center'>
                                <span>Don't have an account? </span><span className='fw-bold'>Register Here</span>
                            </div>
                        </form>
                    </div>
                    {show && generateToast()}
                </div>

            </div>
            <div className="col-5 p-0">
                <img className="img-fluid vh-100 vw-100" src="./img/login.png" alt={'login'} />
            </div>
        </div>
    </div>)
}

export default LoginComponent