import React from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable'
import Pagination from './Pagination'
import { useEffect } from 'react';

function Movies(props) {
let { cPage, setcPage } = props;

  let [searchText,setsearchText]=React.useState("");
  let[Moviesperpage,setMoviesperpage]=React.useState(4);

  let [isLoaded,setLoaded]=React.useState(true);
  let [Content,setContent]=React.useState([]);
  
 
  useEffect(function(){ 
      (async function() {
        let response= await fetch("https://react-backend101.herokuapp.com/movies");
        response=await response.json();
         
        setLoaded(false);
        setContent(response.movies);
  })();
  
},[]);

  function setGlobalSearchText(typedtext){
      setsearchText(typedtext);
      setcPage(1);
 }

 function setGlobalnumberofitems(number){
       setMoviesperpage(number);
       setcPage(1);   
 }

  // ************* ye searching,sorting aur Genre wise sort karenge**************  //

  //********** searching logic *****************//
  let filteredContent=[];
  let totalpagesWaliMovies=[];
  if(searchText!=""){
     filteredContent=Content.filter((movie) => {
        let lowerCaseTitle=movie.title.toLowerCase();
        let lowerCasesearchText=searchText.toLowerCase();

        return lowerCaseTitle.includes(lowerCasesearchText);
     });
  }else{
    filteredContent=Content;
  }


//*************Selected Genre logic *************/
if(props.cGenre!=""){
      filteredContent=filteredContent.filter(function(movie){
             return movie.genre.name.trim() == props.cGenre.trim();
      })
     }
 
     totalpagesWaliMovies = filteredContent; // iske hisab se pagination change hoga


  // **********no of movies per page logic*************//
  //pagination ka liya logic hai
   
 let sidx=((cPage-1)*Moviesperpage);
 let eidx=sidx + (Number(Moviesperpage));
 console.log("cpage"+cPage + "sidx"+sidx,"eidx"+eidx);
 filteredContent=filteredContent.slice(sidx,eidx);

  
  return (
    <>
    <div className='flex-row  border-2 border-black'>
    <div className='mb-2'>
    <InputBox setGlobalSearchText={(typedtext) => setGlobalSearchText(typedtext)} setGlobalnumberofitems={(number) => setGlobalnumberofitems(number)}/>
    </div>
    <div className='ml-4'>
    <MoviesTable searchText={searchText} //ye searchText dena ki jarurt nhi hai ab phela jarurat thii ab nhi  
    Content={Content} 
    filteredContent={filteredContent}
    isLoaded={isLoaded} 
    setContent={setContent} />
    </div>
    <div className='mt-2 ml-4'>
    <Pagination totalpagesWaliMovies={totalpagesWaliMovies} Moviesperpage={Moviesperpage} cPage={cPage} setcPage={setcPage}/>
    </div>
    </div>
   </>
  )
}

export default Movies