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
        <Link to="/home/cars">CarsList</Link>
      </nav>
      <Outlet/>
    </>
  );
}


// function Cars(props){
//   return(
//     <figure>
//       <img src={props.picture}/>
//       <figcaption>
//         <p>{props.brand}</p>
//         <p>{props.model}</p>
//         <p>{props.modelYear}</p>
//       </figcaption>
//     </figure>
//   );
// }

function MainContent(props) {
  let pets = "No pets";

  if (props.pets) {
    pets = "Pets allowed";
  }
  return (
    <figure key={props.year}>
      <img src={props.src} alt={props.alt} />
      <figcaption>
        <h3>{props.carModel}</h3>
        <strong>Price: </strong>
        <p>{props.price}</p>
        <strong>Year: </strong>
        <p>{props.year}</p>
        <strong>Max Adults: </strong>
        <p>{props.maxAdults}</p>
        <strong>Max Children: </strong>
        <p>{props.maxChildren}</p>
        <strong>Pets: </strong>
        <p>{pets}</p>
      </figcaption>
    </figure>
  );
}

function App() {

  // const [carsList, setList] = useState([]);

  // useEffect(
  //   function(){
  //     fetch("http://localhost:5000/carList")
  //     .then((response) => response.json())
  //     .then(setList)
  //   },
  //   []
  // );

  // // return(
  // //   <div className='App'>
  // //     carsList
  // //   </div>
  // // );

  // return (
  //   <div className="App">
  //     <Homepage/>
  //     {/* <Navigation/> */}
  //     {
  //       carsList.map(
  //         (car) => (
  //           <Cars
  //           picture={car.picture}
  //           brand={car.Car_Brand}
  //           model={car.Car_Model}
  //           modelYear={car.Car_Model_Year}
  //           key={car.id}
  //           />
  //         )
  //       )
  //     }
  //   </div>
  // );
  const [carList, setCarList] = useState([]);
        useEffect(() => {
            fetch("http://localhost:5000/carlist")
            .then((response) => response.json())
            .then(setCarList)
        });
        return(
            <section>
              <Navigation/>
                {
                    carList.map(
                        (car) => (
                            <MainContent 
                                src={car.picture}
                                maxAdults={car.maxAdults}
                                maxChildren={car.maxChildren}
                                price={car.price}
                                alt={car.carModel}
                                pets={car.pets}
                                year={car.year}
                            />
                        )
                    )
                }
            </section>
        );
}

export default App;
