import React, { Component } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const socket = SockJS("https://msleia.herokuapp.com/command");
const ws = Stomp.over(socket);

class WebSocket extends Component{

    constructor(props){
        super(props);
        // this.initiate_con = this.initiate_con.bind(this);
        // this.sendMessage = this.sendMessage.bind(this);
        // this.connectionHandler = this.connectionHandler.bind(this);
    }
    state = {
        socket,
        ws,
        command:"init",
        timeStamp:Date.now()
    };

    componentDidMount() {
        this.initiate_con("init");   
    }

    initiate_con(params){
        const webSoc = this.state.ws;
        webSoc.connect({}, function(frame) {
            console.log("Please chal ja mere bhai")
        });
        console.log(webSoc);
        const con = this.state.socket;
        con.onopen =  () => {
            console.log("Connected");
            this.sendMessage("Hello from server")
        };
        con.onmessage = (body) => {
            console.log("what the hell??");
            
            if (body.data instanceof Object && 'command' in body.data) {
                console.log(body.data.command)
                const commandMsg = body.data.command;
                this.setState({command:commandMsg});
                this.setState({ timeStamp: Date.now()});
                this.props.commandHandler(commandMsg);
            }
        };
        
        // webSoc.subscribe("http://localhost:8080/command")

    };

    connectionHandler = ()=>{
        console.log("I am hereer!!!!!!!!!!!!!!!!!!");
        // console.log(con);
        // this.state.ws.send("/command", {priority: 9}, "Hello, STOMP");
    }
    sendMessage(msg){
        this.state.ws.send({"message":msg})
    }

    receiveMsg(){

    }

    render() {
        const command = this.state.command;
        return (<span />);
    }
}

export default WebSocket;
