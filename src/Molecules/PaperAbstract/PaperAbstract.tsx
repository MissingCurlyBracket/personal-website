import React from "react";

interface PaperAbstractProps {
    abstract: string;
}

export default function PaperAbstract({abstract}: Readonly<PaperAbstractProps>) {
    return (
        <p>
            {abstract}
        </p>
    )
}