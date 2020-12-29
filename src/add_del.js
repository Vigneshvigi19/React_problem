const Add = ({vignesh,delIt}) =>{

    //const arr=props.vignesh;
  const arr1 = vignesh.map((ninja,index) =>{   
    return(
      <div key={index}>
        <div>name:{ninja.name}</div>
        <div>Age: {ninja.age} </div>
        <div>Weight: {ninja.weight}</div>
        <button onClick={()=>{delIt(ninja.id)}}>Delete</button>
      </div>
    )
     })
    return (
      <div className="ninja">
        
      <div>{arr1}</div>
     
    </div> 
    );
}
export default Add;