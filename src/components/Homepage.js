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
                    content="This is our Homepage"
                    title="Home"
                />
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