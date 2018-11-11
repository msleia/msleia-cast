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
        message : "Hi! This is Leia. What would you like to Learn?",
        prevMsg : "",
        feedback: ""
    };
    handleCommand(payload){
        commandMsg = payload.command
        special_icon = payload.feedback
        
        if (commandMsg.toUpperCase() !== "WELCOME" && commandMsg.toUpperCase() !== "INIT"){
            if (this.state.command.toUpperCase() !== "WELCOME" && this.state.command.toUpperCase() !== "INIT"){
                this.setState({prevMsg:this.state.command})
                this.setState({feedback:special_icon});
            }
            setTimeout(() => {
                this.setState({message:commandMsg});
            }, 1000);
            
        } else {
            this.setState({command:commandMsg});
        }
    }
    render(){
        
        
        return (
            <div class="container">
                <WebSocket commandHandler={this.handleCommand}/>
                <Welcome message={this.state.message} icon={this.state.feedback}/>
            </div>
        )
        
        
    }

}

export default Controller;