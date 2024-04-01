import React from 'react';
import './HomePage.css';
import Project from "../../Templates/Projects/Project";

export default function HomePage() {
    return (
        <div className="home-page">
            <header>
                Lucian's Website
            </header>
            <Project name={"This website"} date={new Date("2024-04-1")} description={"I made this website"}
                     skills={["React", "TypeScript", "Atomic Design", "TDD"]}/>
        </div>
    );
}