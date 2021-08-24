
import './index.css';
import React, { useState,useEffect } from 'react';
import ShowMoreText from "react-show-more-text";

function parseTime(time){
  var date = new Date(time).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
  return date
}


function App() {
  const [isActive, setIsActive] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/get")
      .then((res) => res.json())
      .then((repos) => {
        setData(repos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div >
      
     
      <div className="accordion">
        
            <div class="title"> {data.length} Total Erorrs</div>
              {data.map((data,row_index) => {
                  return (
                    <div className="item">
                          <div className="grid-container" onClick={() =>{
                                        if (isActive === row_index)
                                        {
                                            setIsActive( null)
                                        }
                                        else
                                        {
                                            setIsActive(row_index)
                                        }}} 
                        
                                        >
                                        <ShowMoreText 
                                                lines={3}
                                                more=""
                                                less=""
                                                className="content-css"
                                                anchorClass="my-anchor-css-class"
                                                expanded={false}
                                                width={280}
                                                truncatedEndingComponent={"... "}  className='grid-item'>{data.resource}</ShowMoreText>
                                                <div className='grid-item'> {data.category}</div>
                                                <div className='grid-item' > {parseTime(Number(data.creation_date))}   
                                                </div>
                                    
                          </div>
                           {isActive===row_index &&  <div className="content"><p>Status : {data.details.status} </p> 
                          <p>Severity :{data.details.severity}</p> <p> Tags :{JSON.stringify(data.details.tags).replace(/[^a-zA-Z0-9 : ,_ ]/g, " ") }</p></div>}
                        </div>
      
      )
    })}



       
      </div>
    </div>
  );
}

export default App;
