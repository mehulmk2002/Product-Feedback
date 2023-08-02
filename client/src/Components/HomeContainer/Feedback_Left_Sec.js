import React from "react";
import "./HomeContainer.css";
const Feedback_Left_Sec = (prop) => {
  return (
    <div className="Feedback_Left_Sec_Container">
      <div className="left-feedback-box">
        <div className="semi-left-feedback-box">
          <div style={{ fontSize: "38px" }}>Feedback</div>
          <div style={{ fontSize: "22px" }}>Apply Filter</div>
        </div>
      </div>
      <div className="left-cat-feedback-box">
      <div  onClick={()=>{prop.categoryWiseFilter('All')}} className="category-btn-box">All</div>
        {prop.categories.map((category) => (
          <>
            <div onClick={()=>{prop.categoryWiseFilter(category)}} className="category-btn-box">{category}</div>
          </>
        ))}
        
      </div>
    </div>
  );
};

export default Feedback_Left_Sec;
