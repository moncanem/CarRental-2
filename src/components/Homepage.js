import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <section>
                <Header
                    class_component="home-header"
                />
                {/* <MainContent /> */}
            </section>
        );
    }

}

export default Homepage;