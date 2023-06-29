import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux";
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./state/store";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
const root = ReactDOM.createRoot(document.getElementById('root'));
Kommunicate.init("b41009aba8e59500cfdf3865264f232a", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
