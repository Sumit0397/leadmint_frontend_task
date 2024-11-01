import React, { useState } from 'react'

const FormInput = (props) => {

    const { label, placeholder, type, onChange, name, require, errorMessage} = props
    const [showError, setShowError] = useState(false);
    const [focused, setFocused] = useState(false);

    const handleChange = (e) => {
        const { value } = e.target
        onChange(e) 

        if (name === "email") {
            setShowError(!e.target.validity.valid)
        } else if (name === "confirmPassword") {
            setShowError(value !== pattern)
        } else if (name === "password") {
            if(value.length >= 6 && value.length <= 20){
                setShowError(false);
            }else{
                setShowError(true);
            }
        }
    }

    const handleBlur = (e) => {
        setFocused(true);
        if(!e.target.validity.valid){
            setShowError(true)
        }else{
            setShowError(false)
        }
    }

    return (
        <div className="form-field">
            <label className="form-label">{label}</label>

            <input
                placeholder={placeholder}
                type={type}
                name={name}
                className={`input max-w-full ${showError ? 'input-error' : ''}`}
                onChange={handleChange}
                required={require}
                onBlur={handleBlur}
                focused={focused.toString()}
                onFocus={() => {
                    name == 'confirmPassword' && setFocused(true)
                }}
            />

            {showError && <label className="form-label">
                <span className="form-label-alt text-error">{errorMessage}</span>
            </label>}
        </div>
    )
}

export default FormInput
