import React from 'react';
import Add from './add_del';
import Alter from './Add';


class App extends React.Component{
 
 state={
  one:[
      {name:"Vignesh", number:6361179266, relation:'Friend', id:1},
      {name:'Mahi', number:9448050983, relation:'Friend', id:3}
    ]
}
  addIt = (data)=>{
    data.id = Math.random();
      let temp=[...this.state.one, data];
      this.setState({
        one:temp
      })
    }

    delIt = (id)=>{
      
        let temp=this.state.one.filter(abc=>{
          return id!==abc.id
        })

        this.setState({
          one:temp
        })
    }
  render(){
    return (
      <div>
        <Alter addIt={this.addIt}/>
        <div><p></p> </div>
        <Add vignesh={this.state.one} delIt={this.delIt}/>
        
      </div>
    )
  }
  
    
};
export default App;
