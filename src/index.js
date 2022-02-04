import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { HashRouter, Routes, Route } from "react-router-dom";
import ToolsView from './Components/ToolsView/ToolsView';
import WorkExView from './Components/WorkExView/WorkExView';
import ContactmeView from './Components/ContactmeView/ContactmeView';
import OtherProjectsView from './Components/OtherProjectsView/OtherProjectsView';
import VigilanceApp from './Components/VigilanceApp/VigilanceApp';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/tools" element={<ToolsView />} />
    <Route path="/work_experience" element={<WorkExView />} />
    <Route path="/other_projects" element={<OtherProjectsView />} />
    <Route path="/contact" element={<ContactmeView />} />
    <Route path="/other_projects/vigilance_app" element={<VigilanceApp />} />
    </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
