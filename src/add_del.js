const Add = ({vignesh,delIt,addFav}) =>{
  const arr1 = vignesh.map((ninja,index) =>{   
    return(
      <div key={index}>
        <div>Name:{ninja.name}</div>
        <div>Phone Number: {ninja.number} </div>
        <div>Relation: {ninja.relation}</div>
        <button onClick={()=>{delIt(ninja.id)}}>Delete</button>
        <button onClick={()=>{addFav(ninja.id)}}>Add Favorite</button>
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