import React from 'react';
import "./header.css";
import img from "../../assets/icons/DD_Logo.png";

const header = ({title}) => {
  return (
    <div className="Header">
        <h1>{title}</h1>
        <img src={img} alt="Logo DonDron" width="200px" />
    </div>
  );
};


//nombreDelComponente.defaulProps = { nombreDeLaProp: "Valor"}
header.defaultProps = {
    title: 'Don Dron Web'
};

export default header;
