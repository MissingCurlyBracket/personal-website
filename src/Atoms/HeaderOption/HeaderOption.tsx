import {Link} from "react-router-dom";

export interface HeaderOptionProps {
    href: string;
    text: string;
}

export default function HeaderOption({href, text}: Readonly<HeaderOptionProps>) {

    return (
        <li>
            <Link to={href}>{text}</Link>
        </li>
    );
}