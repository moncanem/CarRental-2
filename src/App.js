import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Navigation(){
  return(
    <>
      <nav>
        <Link to="/home">Homepage</Link>
        <Link to="/homne/cars">CarsList</Link>
      </nav>
      <Outlet/>
    </>
  );
}

function Cars(props){
  return(
    <figure>
      <img src={props.picture}/>
      <figcaption>
        <p>{props.brand}</p>
        <p>{props.model}</p>
        <p>{props.modelYear}</p>
      </figcaption>
    </figure>
  );
}

// function MainContent(){
//   return(
//     <header className="home-header">
//       <div className="container-fluid">
//       <nav>
//           <a className="navlogo" href="#">
//               <img src="/img/camper-van.png" alt="Logo"/>
//           </a>
//           <ul className="nav justify-content-center flex">
//               <li className="nav-item">
//                   <a className="nav-link active" href="/ourvans.html">Our vans</a>
//               </li>
//               <li className="nav-item">
//                   <a className="nav-link" href="/rentalinfo.html">Rental info</a>
//               </li>
//               <li className="nav-item">
//                   <a className="nav-link" href="/photo-gallery.html">Photo gallery</a>
//               </li>
//               <li className="nav-item">
//                   <a className="nav-link" href="/aboutus.html">About us</a>
//               </li>
//               <li className="nav-item">
//                   <a className="nav-link" href="/travel-tips.html">Travel tips</a>
//               </li>
//           </ul>
//           <details>
//               <summary className="fa-solid fa-bars"></summary>
//               <ul className="nav-summary justify-content-center flex">
//                   <li className="nav-item">
//                       <a className="nav-link active" href="/ourvans.html">Our vans</a>
//                   </li>
//                   <li className="nav-item">
//                       <a className="nav-link" href="/rentalinfo.html">Rental info</a>
//                   </li>
//                   <li className="nav-item">
//                       <a className="nav-link" href="/photo-gallery.html">Photo gallery</a>
//                   </li>
//                   <li className="nav-item">
//                       <a className="nav-link" href="/aboutus.html">About us</a>
//                   </li>
//                   <li className="nav-item">
//                       <a className="nav-link" href="/travel-tips.html">Travel tips</a>
//                   </li>
//               </ul>
//           </details>
//       </nav>
//   </div>
//     </header>
//   );
// };

function App() {
  

  const [carsList, setList] = useState([]);

  useEffect(
    function(){
      fetch("http://localhost:5000/cars-api")
      .then((response) => response.json())
      .then(setList)
    },
    []
  );

  // return(
  //   <div className='App'>
  //     carsList
  //   </div>
  // );

  return (
    <div className="App">
      <Homepage/>
      {/* <MainContent/> */}
      <Navigation/>
      {
        carsList.map(
          (car) => (
            <Cars
            picture={car.picture}
            brand={car.Car_Brand}
            model={car.Car_Model}
            modelYear={car.Car_Model_Year}
            key={car.id}
            />
          )
        )
      }
    </div>
  );
}

export default App;
