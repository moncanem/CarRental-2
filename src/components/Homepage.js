import React from 'react';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    MainContent(){
        return(
            <section className="date-reservation">
                <article className='container'>
                    <aside className="reservation_box">
                        <strong>When are you going?</strong>
                        <form action="#" id="booking-form">
                            <input type="text" id="pick_up" name="pick_up" value="" required/>
                            <input type="text" id="return" name="return" value="" required/>
                            <button type="submit" className="go booking-link tracking-link" value="" title="Find">search</button>
                        </form>
                    </aside>
                </article>
            </section>
        );
      };

    render(){
        return(
            <section>
                <MainContent />
            </section>
        );
    }

}

export default Homepage;