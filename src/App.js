import React from 'react';

const App = (props) =>{
  console.log('hey', props)
  const arr=props;
  const arr1= arr.map(ninja =>{
    return (
      <div>
        <div>name:{ninja.name}</div>
        <div>Age: {ninja.age} </div>
      </div>
    )
  })
    return (
      <div className="ninja">
        
      <div>arr1</div>
     
    </div> 
    );
  
  
    
};
export default App;
