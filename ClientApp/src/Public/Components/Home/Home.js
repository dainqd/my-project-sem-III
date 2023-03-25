import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Client/Navbar/Navbar';
import Header from '../Shared/Client/Header/Header';
import Footer from '../Shared/Client/Footer/Footer'
import "./Home.scss"

function Home() {
    return (
        <div>
            <Header />
            <Navbar />
            <div id='home-page'>
                <div className="banner-area">
                    <div className="banner-text">
                        <h1>HomePage</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic autem harum eaque aut deserunt pariatur eum
                            ea, sequi minus nam veniam atque et quisquam molestiae aperiam! Iusto, ipsum.</p>
                        <Link to="#">Read More</Link>
                        <Link to="#">Watch More</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
