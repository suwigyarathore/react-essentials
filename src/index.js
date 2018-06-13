import React from "react";
import ReactDOM from "react-dom";

const style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'verdana'
}

ReactDOM.render(
  <h1 id="title" className='header' style={style}>
    Hello World
  </h1>,
  document.getElementById('react-container')
)
