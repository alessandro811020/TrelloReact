import React from 'react';
import './Lista.css';

class Lista extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        
        this.state={
            addTaskName:''
        }
    }

    handleRemoveList=()=>{

    }

    render(){
        
        return(
            <div className='lista'>
                <h4>{this.props.name}
                <button onClick={this.handleRemoveList}>X</button>
                </h4>
            </div>
        )
    }
}


export default Lista;
