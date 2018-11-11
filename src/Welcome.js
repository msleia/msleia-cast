import React, { Component } from 'react';


class Welcome extends Component{

    constructor(props){
        super(props);

    }
    


    render(){
        var icon;
        if (this.props.icon === "OK") {
            icon =  <span class="fas fa-check-square"></span>
        } else if(this.props.icon === "WRONG") {
            icon =  <span class="fas fa-times-circle"></span>
        } else {
            icon = <span/>
        }

        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                <h1 class="display-4">{this.props.message}
                
                {icon}</h1>
                </div>
            </div>
        )
    }

}

export default Welcome;