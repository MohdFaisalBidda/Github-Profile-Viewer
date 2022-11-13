import React from "react"


export const SearchBar = ({ value, onChange, onClick }) => {
  return (
    <>
      <div style={{ display: "flex", textAlign: "center", justifyContent: "center", height: "38px" }} className="container">

        <input
          className="form-control"
          type="text"
          placeholder="Search github username..."
          onChange={onChange}
          value={value}
        />

        <button className="btn btn-primary mx-1" onClick={onClick}>Search</button>



      </div>


    </>

  );
}


