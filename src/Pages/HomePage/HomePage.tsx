import React from 'react';
import Header from "../../Organisms/Header/Header";
import {Outlet} from "react-router-dom";

export default function HomePage() {
    return (
        <div className="home-page">
            <Header/>
            <Outlet/>
        </div>
    );
}