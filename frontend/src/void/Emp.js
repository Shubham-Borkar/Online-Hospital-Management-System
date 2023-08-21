import { Component } from "react";

class Emp extends Component
{
 
  constructor(){
    debugger;
    super();
    console.log("Inside EMP Constructor");
  }

  state={Name : "Shubham"}

  componentDidMount(){
    console.log("Inside componentDidMount")
  }

  componentDidUpdate(){
    console.log("Inside componentDidUpdate")
  }

  shouldComponentUpdate()
    {
        return false;
    }

  DoSomething=()=>{
    console.log("button click code called..");
    // this.setState({Name : "Rushi"});
    this.setState({Name : "Rushi"})
    // window.location.href="login.html";
  }

render() {
  debugger;
  console.log("render called...")
  return (<>
            <h1>Hello {this.state.Name}</h1>
            <h2>Let's Rock</h2>
            <button onClick={this.DoSomething}> Click Me </button>

          </>);
  }
}

export default Emp;
