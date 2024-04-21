import React from 'react';
import {Outlet} from "react-router-dom";

export default function HomePage() {
    return (
        <div className="home-page">
            <h2>Lucian Negru</h2>
            <Outlet/>
        </div>
    );
}