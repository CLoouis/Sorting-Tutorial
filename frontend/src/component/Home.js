import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import UserInput from './UserInput';
class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <br />
                <UserInput />
                <br />
                <Footer />
            </div>
        );
    }
}

export default Home;