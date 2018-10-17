import React, { Component } from 'react';
import './App.css';
import scriptLoader from 'react-async-script-loader';
import cast from 'cast_receiver';
import castReceiverManager from 'cast_receiver';

class ChromeCast extends Component {

    constructor(props){
        super(props);
        this.onload = this.onload.bind(this)
        this.displayText = this.displayText.bind(this)
    }

    displayText(text){
        console.log(text);
        document.getElementById('message').src = text;
        window.castReceiverManager.setApplicationState(text);
    }

    componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
        if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
          if (isScriptLoadSucceed) {
            this.onload()
          }
          else this.props.onError()
        }
      }
    
      componentDidMount () {
        const { isScriptLoaded, isScriptLoadSucceed } = this.props
        if (isScriptLoaded && isScriptLoadSucceed) {
          this.onload()
        }
      }

    onload() {
        cast.receiver.logger.setLevelValue(0);
        window.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
        console.log('Starting Receiver Manager');
        // handler for the 'ready' event
        castReceiverManager.onReady = function(event) {
          console.log('Received Ready event: ' + JSON.stringify(event.data));
          window.castReceiverManager.setApplicationState('Application status is ready...');
        };
        // handler for 'senderconnected' event
        castReceiverManager.onSenderConnected = function(event) {
          console.log('Received Sender Connected event: ' + event.data);
          console.log(window.castReceiverManager.getSender(event.data).userAgent);
        };
        // handler for 'senderdisconnected' event
        castReceiverManager.onSenderDisconnected = function(event) {
          console.log('Received Sender Disconnected event: ' + event.data);
          if (window.castReceiverManager.getSenders().length == 0) {
            window.close();
          }
        };
        // handler for 'systemvolumechanged' event
        castReceiverManager.onSystemVolumeChanged = function(event) {
          console.log('Received System Volume Changed event: ' + event.data['level'] + ' ' +
              event.data['muted']);
        };
        // create a CastMessageBus to handle messages for a custom namespace
        window.messageBus =
          window.castReceiverManager.getCastMessageBus(
              'urn:x-cast:com.google.cast.sample.helloworld');
        // handler for the CastMessageBus message event
        window.messageBus.onMessage = function(event) {
          console.log('Message [' + event.senderId + ']: ' + event.data);
          // display the message from the sender
          this.displayText(event.data);
          // inform all senders on the CastMessageBus of the incoming message event
          // sender message listener will be invoked
          window.messageBus.send(event.senderId, event.data);
        }
        // initialize the CastReceiverManager with an application status message
        window.castReceiverManager.start({statusText: 'Application is starting'});
        console.log('Receiver Manager started');
      };
      // utility function to display the text message in the input field
    render(){
        return(<span />);
    };
}

export default scriptLoader(
    'https://www.gstatic.com/cast/sdk/libs/receiver/2.0.0/cast_receiver.js'
)(ChromeCast);