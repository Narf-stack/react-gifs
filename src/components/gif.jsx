import React, {Component} from "react";


class Gif extends Component{
  render(){
    const src="https://media1.giphy.com/media/TkDoWdcfqEwoSwqZ4x/200.gif";
    return(
      <img src={src} alt="" className="gif"/>
    )
  }
}


export default Gif;
