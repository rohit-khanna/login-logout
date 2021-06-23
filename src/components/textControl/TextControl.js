import React from 'react';
import './TextControl.css'

export default function TextControl({ value, onChange, isPassword, id, labelText }) {
    return (
        <div className="textControlContainer">
            <label className="label" htmlFor={id} >{labelText}</label>
            <input className="textControl" id={id} type={isPassword ? 'password' : 'text'} value={value} onChange={onChange} />
        </div>
    )
}