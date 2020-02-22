import React from 'react'
import { Pagination } from 'react-bootstrap';

export default function PaginationCo(props) {
    const pageLink =[]

    for (let i = 1; i <= props.pages ; i++){

     pageLink.push(<Pagination.Item active = {props.currentPage === i ? 'active' : ''} key={i} onClick={()=> props.nextPage(i)}>{i}</Pagination.Item>
     )

    }

    return (
        <div>
           <Pagination>
               {pageLink}
            </Pagination> 
        </div>
    )
}

