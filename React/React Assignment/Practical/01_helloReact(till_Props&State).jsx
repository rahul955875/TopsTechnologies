
import React from 'react'

function helloReact() {
    const data = 'jsx stands for javascript XML'
  return (
    <>
    {/* task 1 */}
    <div>Hello, React!</div>

    {/* task 2 */}
    <h1>"Welcome to JSX"</h1>
    <p>{data}</p>
    <Greeting name='React'/>
    <WelcomeMessage/>
    <UserCard name='Narendra Modi' age={74} location = 'Delhi'/>
    <Counter/>
    </>
  )
}
const Greeting = ({name})=>{
    return (
        <>
        {/* Functional & class components task1 */}
        <h2>"Hello {name}!"</h2>
        </>
    )
}

// task 2 (/* Functional & class components)

class WelcomeMessage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to React!</h1>
      </div>
    );
  }
}

//Props and State task 1
const UserCard=(name,age,location)=>{
    return(
        <>
        <div className='card'>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <p>Location: {location}</p>

        </div>
        </>
    )
}

// task 2

class Counter extends React.Component {
    
    constructor() {
        super();
        this.state = {
            count: 0 
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button> 
            </div>
        );
    }
}

export default helloReact