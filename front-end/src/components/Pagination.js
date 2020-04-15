import React from 'react'
import { PaginationItem } from 'semantic-ui-react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = []; 

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div class="ui menu">
            {pageNumbers.map(number => (
                <button onClick = {() => paginate(number)}>{number}</button>
            ))} 
        </div>
        // <nav>
        //     <ul className="pagination">
        //         {pageNumbers.map(number => (
        //             <li key={number} className="page-item">
        //                 <button onClick = {() => paginate(number)}>
        //                     {number}
        //                 </button>
        //             </li>
        //         ))}
        //     </ul>
        // </nav>
    )
}

export default Pagination;
