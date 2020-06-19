import React from 'react';
import '../Home.css';
import SeachResult from './SearchResult';


const Home = (props) => {
    return (
       <div>
            <section className="main-page">
            <nav className="navbar">
                <div className="search-bar">
                    <i className="far fa-star"></i>
                    <input type="text"
                        placeholder="Search Github"
                        className="search-bar-input"
                    />
                    <h4>Pull requests</h4>
                    <h4>Issues</h4>
                    <h4>Marketplace</h4>
                    <h4>Explore</h4>
                </div>
            </nav>
            <SeachResult/>

            
        </section>
       </div>
        

    )
}

export default Home;