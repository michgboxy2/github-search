import React, {useState, useEffect} from 'react';
import Pagination from './Paginate';
import Profile from './Profile';
import axios from 'axios';

const SearchResult = ({SearchResult, usersPerPage, totalUsers, paginate}) => {
  const {items} = SearchResult;
  const API_URL = 'https://gitsearch7.herokuapp.com';
  const [profileDetails, setProfileDetails] = useState({});
  const [userDetails, setUserDetails] = useState("");
  const [displayProfile, setShowProfile] = useState(false);
  const {REACT_APP_API_URL = API_URL} = process.env;


  const showProfile = () => {
    if(displayProfile){
      return <Profile profileInfo={profileDetails}/>
    }
  }

  useEffect(() => {
    const getProfile = async () => {
      const options = {
        method: 'GET',
        url: `${REACT_APP_API_URL}/search/${userDetails}`
      };

      let data = await axios(options);

      setProfileDetails(data.data);
      setShowProfile(true);
    }

    getProfile();
  }, [userDetails]);


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
            <div className="username" onClick={e => setUserDetails(data.login)}>
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
              {showProfile()}
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
                        <h5>Githap</h5><span>Your favorite search app</span>
                        {/* <span>Michgboxy</span> */}
                        </div>
                    </div>
                    </div>
                    <button type="button" className="follow-btn">Follow</button>                
                  </div> 
                  {userInfo()}
                  <Pagination usersPerPage={usersPerPage} totalUsers={totalUsers} paginate={paginate}/>
              </div>
            </div>
    )
}

export default SearchResult;