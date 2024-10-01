import {ReactElement} from "react";

interface ItemTitleProps {
    title: string;
}

export default function ItemTitle({title}: ItemTitleProps): Readonly<ReactElement> {
    return (
        <h2>{title}</h2>
    );
}