import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Link, Outlet } from 'react-router-dom';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <section>
                <Header
                    class_component="home-header"
                    content="This is our Homepage"
                    title="Home"
                />
                <h1>HomePage</h1>
                <Outlet/>
                <Footer
                    className="footer-content"
                    title="Footer"
                    content="This is our footer"
                />
            </section>
        );
    }

}
export default Homepage;