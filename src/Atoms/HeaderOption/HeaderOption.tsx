import {Link} from "react-router-dom";

export interface HeaderOptionProps {
    href: string;
    text: string;
    isSelected: boolean;
}

export default function HeaderOption({
                                         href,
                                         text,
                                         isSelected
                                     }: Readonly<HeaderOptionProps>) {

    return (
        <li>
            <Link to={href}
                  className={isSelected ? 'selected' : ''}>{text}</Link>
        </li>
    );
}