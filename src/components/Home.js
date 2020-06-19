import React from 'react';
import '../Home.css';


const Home = (props) => {
    return (
        <section className="main-page">
            <nav className="navbar">
                <div className="search-bar">
                    <i className="far fa-star"></i>
                    <input type="text"
                        placeholder="Search Github"
                        className="search-bar-input"
                    />
                </div>
                <div className="nav-feautures">
                <h4>Pull Request</h4>
                <h4>Issues</h4>
                <h4>Marketplace</h4>
                <h4>Explore</h4>
                </div>               
            </nav>

            <div className="search-content">
            
               <div className="result-header">
                    <h4>102,343</h4><span>users</span>
               </div> 
               <div className="results">
                 <div className="result">
                    <div className="user-avatar">
                       <img src="" alt="user-avatar"/>
                    </div>
                    
                    <div className="user">
                        <h4>Michael King</h4>
                        <span>Michgboxy</span>
                        <p className="result-text">
                            Born A king, Live a King
                        </p>
                        <span>Lagos, Nigeria</span>
                        <span>michgboxy@gmail.com</span>
                        <button type="button" className="follow-button">Follow</button>
                    </div>
                  
                  </div> 

                                   <div className="result">
                    <div className="user-avatar">
                       <img src="" alt="user-avatar"/>
                    </div>
                    
                    <div className="user">
                        <h4>Michael King</h4>
                        <span>Michgboxy</span>
                        <p className="result-text">
                            Born A king, Live a King
                        </p>
                        <span>Lagos, Nigeria</span>
                        <span>michgboxy@gmail.com</span>
                        <button type="button" className="follow-button">Follow</button>
                    </div>
                  
                  </div>                   

                                   <div className="result">
                    <div className="user-avatar">
                       <img src="" alt="user-avatar"/>
                    </div>
                    
                    <div className="user">
                        <h4>Michael King</h4>
                        <span>Michgboxy</span>
                        <p className="result-text">
                            Born A king, Live a King
                        </p>
                        <span>Lagos, Nigeria</span>
                        <span>michgboxy@gmail.com</span>
                        <button type="button" className="follow-button">Follow</button>
                    </div>
                  
                  </div>  

                                   <div className="result">
                    <div className="user-avatar">
                       <img src="" alt="user-avatar"/>
                    </div>
                    
                    <div className="user">
                        <h4>Michael King</h4>
                        <span>Michgboxy</span>
                        <p className="result-text">
                            Born A king, Live a King
                        </p>
                        <span>Lagos, Nigeria</span>
                        <span>michgboxy@gmail.com</span>
                        <button type="button" className="follow-button">Follow</button>
                    </div>
                  
                  </div> 

                                   <div className="result">
                    <div className="user-avatar">
                       <img src="" alt="user-avatar"/>
                    </div>
                    
                    <div className="user">
                        <h4>Michael King</h4>
                        <span>Michgboxy</span>
                        <p className="result-text">
                            Born A king, Live a King
                        </p>
                        <span>Lagos, Nigeria</span>
                        <span>michgboxy@gmail.com</span>
                        <button type="button" className="follow-button">Follow</button>
                    </div>
                  
                  </div>                                                                        
               </div>
            </div>
        </section>
    )
}

export default Home;