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
      {/* <Header />
      <Banner />
      <ComponentList /> */}
      {/* <SyntaxHighlighter language="javascript" style={dark}>
        {codeString}
      </SyntaxHighlighter> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/pannel/*" element={<Pannel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
