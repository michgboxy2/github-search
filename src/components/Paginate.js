import React from 'react';

const Pagination = ({usersPerPage, totalUsers, paginate}) => {
   const pageNumbers = [];

   for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
       pageNumbers.push(i);
   }

    return (
        
             <footer className="page-footer">
                  <ul>
                   {pageNumbers.map(number => (
                     <li key={number} onClick={() => paginate(number)}>
                         {number}
                     </li>
                   ))}
                </ul>
                 </footer>  
              
    )
}

export default Pagination;