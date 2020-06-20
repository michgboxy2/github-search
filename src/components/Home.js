import React, {useState} from 'react';
import '../Home.css';
import SeachResult from './SearchResult';
import axios from 'axios';


const Home = (props) => {
    const [username, setUsername] = useState('');
    const [result, setResult] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(30);
    const [totalCount, setTotalCount] = useState(0);
    const {REACT_APP_API_URL, REACT_APP_TOKEN} = process.env;

    

    const getList = async (page) => {
        const options = {
            method: 'GET',
            headers: { 'content-type': 'application/x-www-form-urlencoded', 'Authorization': 'token '+REACT_APP_TOKEN },
            // url : `${REACT_APP_API_URL}users/?q=${username}`,
            url: `https://api.github.com/search/users?q=${username}&page=${page}`
          };


          let data = await axios(options);
          
          if(data.data.total_count > 300){
            setTotalCount(300);
          } else {
          setTotalCount(data.data.total_count);
        }

          setResult(data.data);

        
    }

    const indexOfLastPage = currentPage * usersPerPage;
    const indexOfFirstPage = indexOfLastPage - usersPerPage;
    const SearchUser = (e) => {
        if(e.key === "Enter"){
            console.log('yup');
            getList(currentPage);
        }
    }

    const paginate = (pageNumber) => {setCurrentPage(pageNumber); getList(pageNumber)};

    return (
       <div>
            <section className="main-page">
            <nav className="navbar">
                <div className="search-bar">
                    <i className="far fa-star"></i>
                    <input type="text"
                        placeholder="Search Github"
                        className="search-bar-input"
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyPress={SearchUser}
                    />
                    <h4>Pull requests</h4>
                    <h4>Issues</h4>
                    <h4>Marketplace</h4>
                    <h4>Explore</h4>
                </div>
            </nav>
            <SeachResult SearchResult={result} usersPerPage={usersPerPage} totalUsers={totalCount} paginate={paginate}/>

            
        </section>
    
       </div>
        

    )
}

export default Home;