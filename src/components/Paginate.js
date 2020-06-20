import React from 'react';

const Pagination = ({usersPerPage, totalUsers}) => {
   const pageNumbers = [];

   for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
       pageNumbers.push(i);
   }

    return (
        
             <footer className="page-footer">
                  <ul>
                   {pageNumbers.map(number => (
                     <li key={number} onClick={() => console.log(number)}>
                         {number}
                     </li>
                   ))}
                </ul>
                 </footer>  
              
    )
}

export default Pagination;