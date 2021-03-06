import React, { Component } from 'react';
import Welcome  from './Welcome'
import WebSocket from './WebSocket'
import VocabList from './VocabList'

class Controller extends Component{

    constructor(props){
        super(props);
        this.handleCommand = this.handleCommand.bind(this);
        
    }
    
    state = {
        command : "WELCOME",
        message : "Hi! This is Leia. What would you like to Learn?",
        prevMsg : "",
        feedback: "",
        mastered_content: []
    };
    handleCommand(payload){
        console.log("Entering handle command");
        const commandMsg = payload.command;
        const special_icon = payload.feedback;
        console.log(typeof(commandMsg))
        if (commandMsg instanceof Object && 'mastered_vocab' in commandMsg) {
            this.setState({command:'mastered_vocab'});
            this.setState({mastered_content:commandMsg.mastered_vocab})
        } else {
            console.log("new command is: "+commandMsg.toUpperCase()+". Old Command was: "+this.state.command.toUpperCase());
            if (commandMsg.toUpperCase() !== "WELCOME" && commandMsg.toUpperCase() !== "INIT"){
                if (this.state.command.toUpperCase() !== "WELCOME" && this.state.command.toUpperCase() !== "INIT"){
                    this.setState({prevMsg:this.state.command});
                    this.setState({feedback:special_icon});
                    console.log("setting prev message to: "+this.state.prevMsg+" and feedback icon to "+this.state.feedback);
                }
                setTimeout(() => {
                    this.setState({message:commandMsg});
                    this.setState({feedback:""})
                }, 2000);
                this.setState({command:"COMM"});
                
            } else {
                this.setState({command:commandMsg});
            }
        }
    }
    render(){

        var message = this.state.message
        
        if (this.state.command == 'mastered_vocab') {
            message = <VocabList mastered_content={this.state.mastered_content} />
        } else {
            message = <Welcome message={this.state.message} icon={this.state.feedback}/>
        }
        
        return (
            <div class="container">
                <WebSocket commandHandler={this.handleCommand}/>
                {message}
            </div>
        )
        
        
    }

}

export default Controller;