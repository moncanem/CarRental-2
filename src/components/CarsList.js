import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';


    MainContent = (props) => {
        return(
            <figure key={props.year}>
                <img src={props.src} alt={props.alt}/>
                <figcaption>
                    <h3>{props.carModel}</h3>
                    <ul>
                        <li>{props.price}</li>
                        <li>{props.year}</li>
                        <li>{props.maxAdults}</li>
                        <li>{props.maxChildren}</li>
                        <li>{props.pets}</li>
                    </ul>
                </figcaption>
            </figure>
        );
    }
    
    
    export function ShowCarList(){
        const [carList, setCarList] = useState([]);
        useEffect(() => {
            fetch("http://localhost:6000/carlist")
            .then((response) => response.json())
            .then(setCarList)
        });
        return(
            <section>
                <Header
                    class_component="home-header"
                    content="This is our Homepage"
                    title="Home"
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