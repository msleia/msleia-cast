import React, { Component } from 'react';
import Welcome  from './Welcome'
import WebSocket from './WebSocket'

class Controller extends Component{

    constructor(props){
        super(props);
        this.handleCommand = this.handleCommand.bind(this)
        
    }
    
    state = {
        command : "WELCOME"
    };
    handleCommand(commandMsg){
        this.setState({command:commandMsg})
    }
    render(){
        
        if (this.state.command !== "WELCOME") {
            return (
                <div class="container">
                    <WebSocket commandHandler={this.handleCommand}/>
                    <Welcome message="Let us start Learning!!"/>
                </div>
            )
        }
        else {
            return (
                <div class="container">
                    <WebSocket commandHandler={this.handleCommand}/>
                    <Welcome message="Hi! This is Leia. What would you like to Learn?"/>
                </div>
            )
        }
        
    }

}

export default Controller;