import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import { NavItem } from 'react-bootstrap';

function Reviews({review}) {
    const [open, setOpen] = useState(false);
  return (
    <>
    <Button className='mt-3'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        See Reviews
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
         {
            review.map(item=>
               <div>
                 
                    <h6>{item.name} {item.date}</h6>
                    <h6>{item.rating} </h6>
                    <p>{item.comments}</p>
             
               </div>

            )
         }
        </div>
      </Collapse>
      
    </>
  )
}

export default Reviews
