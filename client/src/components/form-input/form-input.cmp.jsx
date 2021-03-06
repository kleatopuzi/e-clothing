import React from "react";
import "./form-input.style.scss";

const FormInput = ({ handleChange, label, ...formProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      {...formProps}
    ></input>
    {label ? (
      <label
        className={`${formProps.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
