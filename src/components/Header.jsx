import { Link } from "react-router-dom"
import './Header.css'


const Header = ()=>{
    return(
        <header>
            <nav>
                <Link to="/">Dashboard</Link><br />
                <Link to="/login">Login</Link>
            </nav>
        </header>
    )
}

export default Header