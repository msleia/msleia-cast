import React, { Component } from 'react';


class VocabList extends Component{

    constructor(props){
        super(props);

    }
    


    render(){
        var listitem =  this.props.mastered_content.map( (w)=> (
            <li  class="list-group-item">{w.word}</li>
        ));
        return (
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
            <ul class="list-group list-group-flush">
                {listitem}    
            </ul>
            </div>
            </div>
        )
    }

}

export default VocabList;