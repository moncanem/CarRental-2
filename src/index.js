import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Homepage from './components/Homepage';
// import Gustavo from './components/Gustavo';
// import { ShowCarList} from './components/CarsList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      {/* <Route path='/login' element={<Login/>}/> */}
      {/* <Route path='/cars' element={<App/>}/> */}
      <Route path='/home' element={<Homepage/>}>
        <Route path='cars' element={<App/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
