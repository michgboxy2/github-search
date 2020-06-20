import React from 'react';
import { Link } from "react-router-dom";
import  '../home.css';





const User = () => {
    return (
        <div>
            <section className="main-page">
            <nav className="navbar">
                <div className="search-bar">
                    <i className="far fa-star"></i>
                    <Link to="/">
                        <button type="Home">Home</button>
                    </Link>
                    <h4>Pull requests</h4>
                    <h4>Issues</h4>
                    <h4>Marketplace</h4>
                    <h4>Explore</h4>
                </div>
            </nav>
            <div className="search-content">
            <div className="user-profile-details">
                <div className="user-img">
                    <img src="https://wificallrecord.s3.amazonaws.com/document_uploads/47714176093329633131.jpeg" alt="user-avatar" width="300"/>
                </div> 
                <div>
                    <h4>Michael King</h4>
                    <p>Michael-King-CN</p>
                    <button type="button">Follow</button>
                    <h5>Block or report user</h5>
                    <div class="user-icons">
                        <i class="far fa-location"> Conde Nast</i>
                        <i class="fas fa-locator">Brooklyn NY</i>
                        <i class="far fa-inbox">michgboxy@gmail.com</i>
                        <i class="far fa-link">aldra.ng</i>
                    </div>
                    <div className="activities">
                    <ul>
                       <li>Overview </li>
                       <li>Repositories <span>116</span></li>
                       <li>Projects <span>0</span></li>
                       <li>Stars <span>18</span></li>
                       <li>Followers <span>7</span></li>
                       <li>Following <span>58</span></li>
                   </ul>
                    </div>
                </div>              
            </div>
            
            <div className="result-header">
                   <ul>
                       <li>Overview </li>
                       <li>Repositories <span>116</span></li>
                       <li>Projects <span>0</span></li>
                       <li>Stars <span>18</span></li>
                       <li>Followers <span>7</span></li>
                       <li>Following <span>58</span></li>
                   </ul>
                   <div>
                   </div>
                    
               </div> 

            </div>

            </section>
        </div>
    )
}

export default User;