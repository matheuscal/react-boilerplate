import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes } from "react-router-dom";

import App from './src/App';

ReactDOM.render(
<BrowserRouter>
<Routes>
    <Route path="/" element={<App />}/>
</Routes>
</BrowserRouter>
, document.getElementById('app'));