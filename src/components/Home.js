import React, {useState} from 'react';
import '../home.css';
import SeachResult from './SearchResult';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = (props) => {
    const [username, setUsername] = useState('');
    const [result, setResult] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(30);
    const [totalCount, setTotalCount] = useState(0);
    const {REACT_APP_API_URL} = process.env;

    

    const getList = async (page) => {
        if(!username){
            toast.error("Kindly input a name");
            return;
        }

        try{
            const options = {
                method: 'GET',
                url: `${REACT_APP_API_URL}/search?username=${username}&page=${page}`
              };
    
              let data = await axios(options);
              
              if(data.data.total_count > 300){
                setTotalCount(300);
              } else {
              setTotalCount(data.data.total_count);
            }
    
              setResult(data.data);

        }catch(e){
            toast.error("something went wrong");
            return;
        }
        
    }
    
    
    const SearchUser = (e) => {
        if(e.key === "Enter"){ getList(currentPage); }
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
                        required={true}
                    />
                    <h4>Pull requests</h4>
                    <h4>Issues</h4>
                    <h4>Marketplace</h4>
                    <h4>Explore</h4>
                </div>
            </nav>
            <SeachResult SearchResult={result} usersPerPage={usersPerPage} totalUsers={totalCount} paginate={paginate}/>          
        </section>
        <ToastContainer />
    
       </div>
        

    )
}

export default Home;