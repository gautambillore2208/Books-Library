import "./Header.css"
import { Link } from "react-router-dom";
function Header(){
    return(
        <>
        <ul className="box2"> 
            <div className="header">

          
            <Link to = "/"><li className="li">Home</li></Link>
             <Link to = "/about"><li className="li">About</li></Link>
            <Link to = "/contact"><li className="li">contact</li></Link>
            <Link to = "/error"><li className="li">error</li></Link>
            </div>
        </ul>
        </>
    )
}

export default Header;