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
                   <div className="user-profile-details">
          <div className="user-avatar">
            <img src="https://wificallrecord.s3.amazonaws.com/document_uploads/47714176093329633131.jpeg" alt="user-avatar"/>
          </div>

          </div>
                   </div>
                    
               </div> 

            </div>

            </section>
        </div>
    )
}

export default User;