import React from "react";
import {Link} from 'react-router-dom'

const CategoryList = () => {
  return <>
     <div className="category">
      <h1>CATEGORY LIST</h1>
      <ul className="list">
        <div className="flex">
        <div>
          <li><Link to="" className="link">Music</Link></li>
          <li><Link to="" className="link">Sports and Leisure</Link></li>
          <li><Link to="" className="link">Film and TV</Link></li>
          <li><Link to="" className="link">Arts and Literature</Link></li>
          <li><Link to="" className="link">History</Link></li>
        </div>
        <div>
          <li><Link to="" className="link">Society and Culture</Link></li>
          <li><Link to="" className="link">Science</Link></li>
          <li><Link to="" className="link">Geography</Link></li>
          <li><Link to="" className="link">Food and Drink</Link></li>
          <li><Link to="" className="link">General Knowledge</Link></li>
        </div>
        </div>
      </ul>
     </div>;
  </>
};

export default CategoryList;
