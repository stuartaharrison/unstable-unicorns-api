import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Body from "./components/body";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import {
    CardDatabaseRoute,
    CardsDatabaseRoute,
    CardPackDatabaseRoute,
    CardPacksDatabaseRoute,
    HomePageRoute,
    NotFoundRoute
} from './routes/index';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/404" element={<NotFoundRoute />} />
                <Route path="*" element={
                    <Body>
                        <Navbar />
                        <main>
                            <Routes>
                                <Route path="/" element={<HomePageRoute />} />
                                <Route path="/database" element={<CardsDatabaseRoute />} />
                                <Route path="/database/:cardId" element={<CardDatabaseRoute />} />
                                <Route path="/packs" element={<CardPacksDatabaseRoute />} />
                                <Route path="/packs/:packId" element={<CardPackDatabaseRoute />} />
                                <Route path="*" element={<Navigate replace to="/404" />} />
                            </Routes>
                        </main>
                        <Footer />
                    </Body>
                } />
                
            </Routes>
        </BrowserRouter>
    )
};

export default App;