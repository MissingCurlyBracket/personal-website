import React from "react";

interface PaperTitleProps {
    paperTitle: string;
}

export default function PaperTitle({paperTitle}: Readonly<PaperTitleProps>) {
    return (
        <h3 className="paper-title">
            {paperTitle}
        </h3>
    );
}