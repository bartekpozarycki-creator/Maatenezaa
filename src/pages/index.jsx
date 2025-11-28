import Layout from "./Layout.jsx";

import Home from "./Home";

import NasiUczniowie from "./NasiUczniowie";

import ONas from "./ONas";

import NaszeMetody from "./NaszeMetody";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    NasiUczniowie: NasiUczniowie,
    
    ONas: ONas,
    
    NaszeMetody: NaszeMetody,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/NasiUczniowie" element={<NasiUczniowie />} />
                
                <Route path="/ONas" element={<ONas />} />
                
                <Route path="/NaszeMetody" element={<NaszeMetody />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}