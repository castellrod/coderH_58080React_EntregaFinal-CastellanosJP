import logo from "../../../assets/icons/DD_Logo.png";
import "./styles.css";

function LogoWigdet(){
    return(
        <div className="logo">
            <img src={logo} alt="Logo" className="logo-icono" />
        </div>
    );
}

export default LogoWigdet;