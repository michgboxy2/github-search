import React from 'react';

const SearchResult = ({SearchResult}) => {
  const {items} = SearchResult;

  const userInfo = () => {
    if(items) {
      return items.map((data, i) => {
        return (
          <div className="result" key={i}>
        <div className="user-profile">
        <div className="user-avatar">
           <img src={data.avatar_url} alt="user-avatar"/>
        </div>
        
        <div className="user">
            <div className="username">
            <h4>{data.login}</h4>
            <span>{data.login}</span>
            </div>
        </div>
        </div>
        <button type="button" className="follow-btn">Follow</button>                
      </div> 
        )
      })
    }
  }

    return (
        <div className="search-content">
            
               <div className="result-header">
                   <div className="count">
                        <h4>{SearchResult.total_count}</h4><span>users</span>
                   </div>
                    <button type="button" className="follow-button">Sort: Best match</button>
               </div> 
               <div className="results">
                 <div className="result">
                    <div className="user-profile">
                    <div className="user-avatar">
                       <img src="https://wificallrecord.s3.amazonaws.com/document_uploads/47714176093329633131.jpeg" alt="user-avatar"/>
                    </div>
                    
                    <div className="user">
                        <div className="username">
                        <h4>Michael King</h4>
                        <span>Michgboxy</span>
                        </div>
                    </div>
                    </div>
                    <button type="button" className="follow-btn">Follow</button>                
                  </div> 
                  {userInfo()}
                  <footer className="page-footer">
                  <ul>
                    <li>@2020 Github, inc</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Security</li>
                    <li>Status</li>
                    <li>Help</li>
                    <li><i className="far fa-star"></i></li>
                    <li>Contact Github</li>
                    <li>Pricing</li>
                    <li>API</li>
                    <li>Training</li>
                    <li>Blog</li>
                    <li>About</li>
                </ul>
                 </footer>                                                                                      
              </div>
            </div>
    )
}

export default SearchResult;