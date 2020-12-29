import React from 'react';

class Alter extends React.Component{
    state={
        name:null,
        number:null,
        relation:null,
        id:null
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{

            e.preventDefault();
            document.getElementById("form1").reset();
            this.props.addIt(this.state);

    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} id='form1'>
                    <label >Name:</label>
                    <input type='text' id='name' onChange={this.handleChange}/>
                    <label >Phone Number:</label>
                    <input type='text' id='number' onChange={this.handleChange}/>
                    <label >Relation:</label>
                    <input type='text' id='relation' onChange={this.handleChange}/>
                    <button>Add Contact</button>
                </form>
            </div>
        )
    }
}

export default Alter;