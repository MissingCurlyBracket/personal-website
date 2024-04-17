import React from 'react';
import {Outlet} from "react-router-dom";

export default function HomePage() {
    return (
        <div className="home-page">
            <Outlet/>
        </div>
    );
}