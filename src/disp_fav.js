const Fav = ({favorites,delFav}) => {
    console.log(favorites)
    const arr1 = favorites.map((ninja,index) =>{
    return(
        <div key={index}>
        <div>Name:{ninja.name}</div>
        <div>Phone Number: {ninja.number} </div>
        <div>Relation: {ninja.relation}</div>
        <button onClick={()=>{delFav(ninja.id)}}>Delete</button>
    </div>    
    );
    }
    )
    return(
        <div>
            {arr1}
        </div>
    )
}




export default Fav;