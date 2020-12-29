import React from 'react';
import Add from './add_del';
import Alter from './Add';
import Fav from './disp_fav';
class App extends React.Component{

 state={
  one:[
      {name:"Vignesh", number:6361179266, relation:'Myself', id:1},
      {name:'Mahi', number:9448050983, relation:'Friend', id:2}
    ],
    fav:[]
}


  addFav = (id)=>{
    let temp = this.state.one.filter(abcd=>{
      return id===abcd.id
    })
   
      this.setState({
        fav:[...this.state.fav, temp]
      });
      
      this.delIt(id)
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

    delFav = (id) =>{
      let temp=this.state.fav.filter(abc=>{
        return id!==abc.id
      })

      this.setState({
        fav:temp
      })
    }

  render(){
    return (
      <div>
        <h2>Add Contact</h2>
        <Alter addIt={this.addIt}/>
        <h2>Favorites</h2>
        <Fav  favorites={this.state.fav}  delFav={this.delIt}/>
        <h2>Contacts</h2>
        <Add vignesh={this.state.one} delIt={this.delIt} addFav={this.addFav}/>
      </div>
    )
  }
  
    
};
export default App;
