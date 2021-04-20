import React from 'react';
class Mock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter: 0,
            date: new Date()
         }
       
    }
    componentDidMount(){
        this.timerID = setInterval(() => {
            this.setState({date: new Date()})
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    handleIncrement = (e) => {
        e.preventDefault()
        this.setState({ counter:  this.state.counter + 1});
        console.log(this.state.counter)
    }
    render() { 
        return ( 
            <div>
            <b>Current time: {this.state.date.toLocaleTimeString()}</b>
            <p>Counter : {this.state.counter}</p>
            <button onClick={this.handleIncrement}>Increment</button>
            </div>
         );
    }
}
 
export default Mock;