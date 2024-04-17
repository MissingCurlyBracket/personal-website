import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import NoPage from "./Pages/NoPage/NoPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}>
                <Route path="projects" element={<ProjectsPage/>}/>
                <Route path="contact" element={<ContactPage/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);
