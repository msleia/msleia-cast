import React, { Component } from 'react';


class Welcome extends Component{

    constructor(props){
        super(props);

    }
    


    render(){
        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                <h1 class="display-4">{this.props.message}</h1>
                </div>
            </div>
        )
    }

}

export default Welcome;