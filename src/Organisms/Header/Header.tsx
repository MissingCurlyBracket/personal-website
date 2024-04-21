import './Header.css';
import HeaderOption from "../../Atoms/HeaderOption/HeaderOption";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <Link to="/"><img src="./logo192.png" alt="logo" className="logo"/></Link>
            <nav className='navigation'>
                <ul>
                    <HeaderOption href='/' text="Home"/>
                    <HeaderOption href="/experience" text="Experience"/>
                    <HeaderOption href="/projects" text="Projects"/>
                    <HeaderOption href="/contact" text="Contact"/>
                </ul>
            </nav>
        </div>
    )
};