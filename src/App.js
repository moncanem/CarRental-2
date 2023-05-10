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
