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
               {props.currentPage > 1 ? <Pagination.Prev onClick={()=> props.nextPage(props.currentPage -1)}> {`<`} </Pagination.Prev> :''}
               {props.pages > 10 ? <Pagination.Ellipsis onClick={()=> props.nextPage(props.currentPage )}> {`...`} </Pagination.Ellipsis> :''}
               {pageLink}
               {props.currentPage < 1 ? <Pagination.Next onClick={()=> props.nextPage(props.currentPage +1)}> {`>`}</Pagination.Next> :''}

            </Pagination> 
        </div>
    )
}

