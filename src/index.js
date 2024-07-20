// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { GlobalStyle } from './styles/GlobalStyle';

// //const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.render(
//   <React.StrictMode>  
//     <GlobalStyle />
//     <App />
//   </React.StrictMode>
// );

import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle';
import App from './App'
import { GlobalProvider } from './context/globalContext'

ReactDOM.render(
    <BrowserRouter>
     <GlobalStyle />
      <GlobalProvider>
      <App />
      </GlobalProvider>
    </BrowserRouter>,
  document.getElementById('root'),
)


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { GlobalProvider } from './context/globalContext';
// import { GlobalStyle } from './styles/GlobalStyle';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <GlobalStyle />
//     <GlobalProvider>
//       <App />
//     </GlobalProvider>
//   </React.StrictMode>
// );