import React, { Component } from "react";
import "./LifecycleComponent.css";

class LifecycleComponent extends Component {
    // state = {
    //     count: 1
    // }
    constructor (props) {
        
        super(props);
        this.state = {
            count: 1
        }
        console.log('constructor'); 
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        // this.setState({
        //     count: 2
        // })
        console.log('componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        console.log('render');
        return(
            <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
        )
    }
}

export default LifecycleComponent;