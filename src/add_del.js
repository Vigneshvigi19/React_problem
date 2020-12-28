const Add = (props) =>{

    const arr=props.vignesh;
  const arr1 = arr.map((ninja,index) =>{   
    return(
      <div key={index}>
        <div>name:{ninja.name}</div>
        <div>Age: {ninja.age} </div>
        <div>Weight: {ninja.weight}</div>
        <div>Id:{ninja.id} </div>
        <button>Delete</button>
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