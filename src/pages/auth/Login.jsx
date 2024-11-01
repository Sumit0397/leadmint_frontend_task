import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormInput from '../../components/auth/FormInput'
import { toast } from 'react-toastify'

const initialState = {
    email: "",
    password: "",
}

const Login = () => {
    const [values, setValues] = useState(initialState)
    const navigate = useNavigate();

    const loginInput = [
        {
            id: 1,
            name: "email",
            type: 'email',
            placeholder: 'Enter Your Email',
            label: 'Email address',
            require: true,
            errorMessage: 'Please enter a valid email.'
        },
        {
            id: 2,
            name: "password",
            type: 'password',
            placeholder: 'Enter Your Password',
            label: 'Password',
            require: true,
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();

        const userEmail = values.email;
        const userPassword = values.password;

        const existingUser = JSON.parse(localStorage.getItem('users')) || [];

        if (existingUser.length === 0) {
            toast.info('No user found!, please register to join us.', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            const existUser = existingUser.find((user) => user.email == userEmail);
            if (existUser) {
                existUser.password === userPassword ? navigate("/user/home") : toast.warn('Incorrect Password!', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                toast.error('This email is not registered!', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        }
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-semibold underline">Log In</h1>
                <p className="text-sm mt-1">Log in to access your account</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    {
                        loginInput.map((input) => (
                            <FormInput
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))
                    }
                    <div className="form-field pt-5">
                        <div className="form-control justify-between">
                            <button type="submit" className="btn btn-primary w-full">Log in</button>
                        </div>
                    </div>

                    <div className="form-field">
                        <div className="form-control justify-center">
                            <p className="link link-underline-hover link-primary text-sm">Don't have an account yet? <Link className='pl-1' to={"/auth/register"}>Register</Link>.</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
