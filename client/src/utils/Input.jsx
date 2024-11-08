import React from "react";

export default function Input({ icon, type }) {
  return (
    <div className="input input-bordered flex items-center gap-2">
      <span className="input-group-text">
        <img src={icon} alt={icon} />
      </span>
      <input
        type={type}
        className="form-control grow"
        placeholder={type}
        value={type}
      />
    </div>
  );
}
