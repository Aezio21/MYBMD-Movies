import React, { useEffect } from 'react'

function Genre(props) {
  let [isLoaded,setLoaded]=React.useState(true);
  let [Content,setContent]=React.useState([]);

  
  useEffect( function (){
    (async function(){
      let response= await fetch("https://react-backend101.herokuapp.com/genres");
      response=await response.json();
         
        setLoaded(false);
        setContent(response);
  })();
  },[])

  function handlegenreClick(genre){
    if(genre!="All Genre"){
    props.setGlobalGenre(genre);
    }else{
    props.setGlobalGenre("");
    }
  }


  return (
    <div className='flex-row border-2 border-black'>
    <div className='flex m-2 text-center text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold cursor-pointer' onClick={() => handlegenreClick("All Genre")}>All Genre</div>
     
     <div>{isLoaded==true?<span>isLoading...</span>:
     <div>
      { Content.genres ?Content.genres.map(function(genre){
           return(
             <div key={genre._id} 
             className=' flex m-2 text-lg text-center p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold cursor-pointer ' onClick={() => handlegenreClick(genre.name)}>{genre.name}</div>
           )
     }):[]
       
       }</div>}</div>

    {/* <div className='border-2 text-center border-t-0 cursor-pointer font-bold'>Comedy</div>
    <div className='border-2 text-center border-t-0 cursor-pointer font-bold'>Thiller</div>
    <div className='border-2 text-center border-t-0 cursor-pointer font-bold'>Action</div> */}
    </div>
  )
}

export default Genre;