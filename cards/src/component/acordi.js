import React, { useState } from 'react';
import ShowMoreText from "react-show-more-text";
import '../index.css'

const Accordion = ({index,resource, category ,creation_date,severity,status,name}) => {
  const [isActive, setIsActive] = useState(null);

  return (
  
    <div className="item">
      <div className="grid-container" onClick={() =>{
                    if (isActive === index)
                    {
                        setIsActive( null)
                        console.log(isActive) }
                    else
                    {
                         setIsActive(index)
                    }}} 
                    // setIsActive(!isActive)}
                    >
                    <ShowMoreText 
                            lines={3}
                            more=""
                            less=""
                            className="content-css"
                            anchorClass="my-anchor-css-class"
                            expanded={false}
                            width={280}
                            truncatedEndingComponent={"... "}  className='grid-item'>{resource}</ShowMoreText>
                            <div className='grid-item'> {category}</div>
                            <div className='grid-item' > {creation_date.toLocaleString("en-US", {month: "long",day: "numeric",year: "numeric"})}   
                            </div>
                
      </div>
      {console.log(isActive)}{console.log(index)} {isActive===index &&  <div className="content"><p>Status : {status} </p> 
      <p>Severity :{severity}</p> <p> Tags : {name}</p></div>}
    </div>
  );
};

export default Accordion;