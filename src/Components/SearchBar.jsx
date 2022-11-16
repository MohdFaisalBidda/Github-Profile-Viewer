import React from "react"
import "./SearchBar.css"


export const SearchBar = ({ value, onChange, onClick }) => {
  return (
    <>
      <div>
        <div className="inputBox">
        <input
          className="form-control"
          type="text"
          required="required"
          onChange={onChange}
          value={value}
        />
        <span>Username</span>
        <button className="btn" onClick={onClick}>Search</button>
        </div>



      </div>


    </>

  );
}


