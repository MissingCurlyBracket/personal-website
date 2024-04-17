import './Header.css';
import HeaderOption from "../../Atoms/HeaderOption/HeaderOption";

export default function Header() {
    return (
        <div className="header">
            <img src="%PUBLIC_URL%/logo192.png" alt="logo" className="logo"/>
            <nav>
                <ul>
                    <HeaderOption href='/' text="Home"/>
                    <HeaderOption href="/projects" text="Projects"/>
                    <HeaderOption href="/contact" text="Contact"/>
                </ul>
            </nav>
        </div>
    )
};