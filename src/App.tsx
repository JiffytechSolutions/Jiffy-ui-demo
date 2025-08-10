// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Pannel from './Components/Pannel/Pannel';
import Documentation from './Components/Documentation/Documentation';
import SearchResults from './Components/SearchResults/SearchResults';
import { ThemeProvider } from './contexts/ThemeContext';
import { SearchProvider } from './contexts/SearchContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <SearchProvider>
          <BrowserRouter basename="/Jiffy-ui-demo">
            <Routes>
              <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="/docs" element={<Documentation />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/pannel/*" element={<Pannel />} />
                <Route path="/blocks" element={<div style={{ padding: '2rem', textAlign: 'center' }}>Blocks - Coming Soon</div>} />
                <Route path="/charts" element={<div style={{ padding: '2rem', textAlign: 'center' }}>Charts - Coming Soon</div>} />
                <Route path="/themes" element={<div style={{ padding: '2rem', textAlign: 'center' }}>Themes - Coming Soon</div>} />
                <Route path="/colors" element={<div style={{ padding: '2rem', textAlign: 'center' }}>Colors - Coming Soon</div>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </SearchProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
