import React,{useState} from 'react'

export default function Editor() {

    const handleOnChange = (event)=>{
        console.log('On change');
        setText(event.target.value);//showing inputed data
        }
    
    const [text, setText] = useState('Enterr your text')
    return (
        <>
        
         <div className="container">
           <div className="input">
             <h3>Input</h3>
             <textarea
              className="input-text"
              value={text}
              onChange={handleOnChange}
            />
          </div>

          <div className="output">
             <h3>Pro Note</h3>
             <div className="output-text">{text}</div>
           </div>
         </div>
      
        </>
    )
}


//****** this is anathoer way to doing this using react class

/*
import React, { Component } from "react";

class Editor extends Component {
  constructor() {
    super();
    // to bind the method with event handler without ().
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: "",
    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="input">
            <h3>Input</h3>
            <textarea
              className="input-text"
              onChange={this.handleChange}
              defaultValue={this.state.value}
            />
          </div>
          <div className="output">
            <h3>Pro Note</h3>
            <div className="output-text">{this.state.value}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor; */