import React from "react";
import "./Filter.css";
import StarRatingComponent from "react-star-rating-component";


const Filter = ({updateinput,updaterate,rate}) => {
  
              
  return (
    <div className="search-header">
      <div className="search-content">
        <form className="search">
          
          <input type="text"  placeholder="Search Movies with title" onChange={(e)=>updateinput(e.target.value)}/>
          <span style={{color:"white"}}></span>
          <span className="search-rate">
          <StarRatingComponent name="rat" onStarClick={updaterate} value={rate} />
    
</span>
          
        </form>
        
      </div>
    
    </div>
  );
};

export default Filter;