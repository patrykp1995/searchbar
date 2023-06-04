import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home";
import SearchAppBar from "./components/SearchAppBar";
import {StyledEngineProvider} from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <Provider store={store}>
            <SearchAppBar/>
            <Home />
            </Provider>
        </StyledEngineProvider>
    </React.StrictMode>
);

reportWebVitals();
