import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
    return (
        <nav className="nav">
            <ul>
                <li className="nav__item">
                    <Link to="/">Champions</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar