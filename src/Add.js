import React from 'react';

class Alter extends React.Component{
    state={
        name:null,
        age:null,
        weight:null,
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
                    <label >Age:</label>
                    <input type='text' id='age' onChange={this.handleChange}/>
                    <label >Weight:</label>
                    <input type='text' id='weight' onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Alter;