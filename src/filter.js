import React, { Component } from 'react';
import PostData from "./emojiList.json";
import "./filter.css";

class Filter extends Component{
  render(){
    const emojiList = PostData.map((post)=> (
      <div class="filter-emoji">
       {post.symbol}
       {post.title}
       </div>));
       return (<h1>{emojiList}</h1>);
    
  }    
        
  }
export default Filter;