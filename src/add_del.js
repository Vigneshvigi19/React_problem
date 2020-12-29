const Add = ({vignesh,delIt}) =>{

    //const arr=props.vignesh;
  const arr1 = vignesh.map((ninja,index) =>{   
    return(
      <div key={index}>
        <div>Name:{ninja.name}</div>
        <div>Number: {ninja.number} </div>
        <div>Relation: {ninja.relation}</div>
        <button onClick={()=>{delIt(ninja.id)}}>Delete</button>
        <p></p>
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