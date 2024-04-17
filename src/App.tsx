import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import NoPage from "./Pages/NoPage/NoPage";
import React from "react";
import Header from "./Organisms/Header/Header";

export default function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="projects" element={<ProjectsPage/>}/>
                <Route path="contact" element={<ContactPage/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </>
    );
}