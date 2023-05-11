import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
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
        <ul>
          <li>{props.price}</li>
          <li>{props.year}</li>
          <li>{props.maxAdults}</li>
          <li>{props.maxChildren}</li>
          <li>{pets}</li>
        </ul>
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
                <Header
                    class_component="home-header"
                    content="This is our Homepage"
                    title="Car rental"
                />
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
                <Footer
                    className="footer-content"
                    title="Footer"
                    content="This is our footer"
                />
            </section>
        );
}

export default App;
