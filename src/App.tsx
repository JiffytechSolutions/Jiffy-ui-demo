// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import ComponentList from './Components/ComponentList/ComponentList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Pannel from './Components/Pannel/Pannel';
import Documentation from './Components/Documentation/Documentation';
import SearchResults from './Components/SearchResults/SearchResults';
import { ThemeProvider } from './contexts/ThemeContext';
import { SearchProvider } from './contexts/SearchContext';

function App() {
  const codeString = `
  import React from "react";
  import { ChevronDown } from "react-feather";
  import './accordion.css';
  export interface AccordionI {
    accordionHeader?: string | React.ReactNode;
    onClick?: any;
    isExpended: boolean;
    children?: string | React.ReactNode;
    icon?: React.ReactNode;
    withNumber?: boolean;
  }
  const Accordion = ({
    accordionHeader,
    onClick,
    isExpended,
    children,
    icon,
    ...props }:
    AccordionI) => {
    return (
      <div className={'accordion'}>
        <div className={}>
          {icon &&
            <div className="accordion-headaer__icon">
              {icon}
            </div>
          }
          <h3 className="accordion-header__title">
            {accordionHeader}
          </h3>
          <ChevronDown size="16" />
        </div>
        <div className={accordion-body}"}>
          <div className="accordion-body_content">
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default Accordion;
  `

  return (
    <div className="App">
      <ThemeProvider>
        <SearchProvider>
          <BrowserRouter basename="/JiffyDemo">
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
