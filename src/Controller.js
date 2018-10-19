import React, { Component } from 'react';
import Welcome  from './Welcome'
import WebSocket from './WebSocket'

class Controller extends Component{

    constructor(props){
        super(props);
        this.handleCommand = this.handleCommand.bind(this)
        
    }
    
    state = {
        command : "WELCOME",
        message : "Hi! This is Leia. What would you like to Learn?"
    };
    handleCommand(commandMsg){
        this.setState({command:commandMsg})
        if (commandMsg.toUpperCase() !== "WELCOME" && commandMsg.toUpperCase() !== "INIT"){
            this.setState({message:commandMsg})
        }
    }
    render(){
        
        
        return (
            <div class="container">
                <WebSocket commandHandler={this.handleCommand}/>
                <Welcome message={this.state.message}/>
            </div>
        )
        
        
    }

}

export default Controller;