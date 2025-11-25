import React from "react";
import { Route, Routes } from "react-router-dom";
import TextStyleComp from "../component/TextStyleComp";
import Icons from "../component/Icons/Icons";

function Routes1() {
    return (
        <Routes>

            <Route path="/TextStyle" element={<TextStyleComp component="TextStyle" />} />
            <Route path="/PageTitle" element={<TextStyleComp component="PageTitle" />} />
            <Route path="/Card" element={<TextStyleComp component="Card" />} />
            <Route path="/ActionList" element={<TextStyleComp component="ActionList" />} />

            
            
            <Route path="/Accordion" element={<TextStyleComp component="Accordion" />} />

            <Route path="/Button" element={<TextStyleComp component="Button" />} />
            <Route path="/ButtonGroup" element={<TextStyleComp component="ButtonGroup" />} />
            <Route path="/TextLink" element={<TextStyleComp component="TextLink" />} />
            {/* Input */}
            <Route path="/TextField" element={<TextStyleComp component="TextField" />} />
            <Route path="/TextArea" element={<TextStyleComp component="TextArea" />} />
            <Route path="/Checkbox" element={<TextStyleComp component="Checkbox" />} />
            <Route path="/CheckboxGroup" element={<TextStyleComp component="CheckboxGroup" />} />
            <Route path="/FileUpload" element={<TextStyleComp component="FileUpload" />} />


            {/* Icons */}
            <Route path="/Icons" element={<Icons />} />
        </Routes>
    );
}

export default Routes1;
