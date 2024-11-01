import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormInput from '../../components/auth/FormInput'
import { toast } from "react-toastify"

const initialState = {
    email: "",
    password: "",
    confirmPassword: ""
}

const Register = () => {
    const [values, setValues] = useState(initialState)
    const navigate = useNavigate();

    const registerInput = [
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
            errorMessage: 'Password should be 6-20 characters!',
        },
        {
            id: 3,
            name: "confirmPassword",
            type: 'password',
            placeholder: 'Confirm Your Password',
            label: 'Confirm Password',
            require: true,
            errorMessage: "Passwords don't match!"
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        const emailExists = existingUsers.some(user => user.email == values.email)
        if (emailExists) {
            toast.info('This email is already registered. Please use a different email.', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        const newUser = {
            email: values.email,
            password: values.password
        }

        existingUsers.push(newUser);

        localStorage.setItem("users", JSON.stringify(existingUsers));

        toast.success('Registration Succefull!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

        navigate("/auth/login");
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-semibold underline">Register</h1>
                <p className="text-sm mt-1">Register to joun us</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    {
                        registerInput.map((input) => (
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
                            <button type="submit" className="btn btn-primary w-full">Register</button>
                        </div>
                    </div>

                    <div className="form-field">
                        <div className="form-control justify-center">
                            <p className="link link-underline-hover link-primary text-sm">Already have an account? <Link className='pl-1' to={"/auth/login"}>Log in</Link>.</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register
