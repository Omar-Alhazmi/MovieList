import React from 'react'
import './paco.css'
import { Pagination } from 'react-bootstrap';
export default function MainPaginationCo(props) {
    const pageLink =[]
    
   for (let i = 1; i <= 10 ; i++){
     pageLink.push(<Pagination.Item active = {props.currentPage === i ? 'active' : ''} key={i} onClick={()=> props.nextPageMain(i)}>{i}</Pagination.Item>)
     
}
    return (
        <div>
           <Pagination>
               {props.currentPage > 1 ? <Pagination.Prev onClick={()=> props.nextPageMain(props.currentPage -1)}> {`<`} </Pagination.Prev> :''}
               {pageLink}
               {props.currentPage >= 1 ? <Pagination.Next onClick={()=> props.nextPageMain(props.currentPage +1)}> {`>`}</Pagination.Next> :''}
            </Pagination> 
        </div>
    )
}

