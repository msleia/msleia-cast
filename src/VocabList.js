import React, { Component } from 'react';


class VocabList extends Component{

    constructor(props){
        super(props);

    }
    


    render(){
        var listitem =  this.props.mastered_content.map( (w)=> (
            <span><span class="badge badge-info">{w.word}</span> &nbsp;</span>
        ));
        return (
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h2>
                {listitem}
                </h2>
            </div>
            </div>
        )
    }

}

export default VocabList;