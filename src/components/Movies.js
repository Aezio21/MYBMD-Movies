import React,{useEffect, useState} from 'react';
import Image from '../banner.jpg'
import axios from 'axios'
import { Oval } from  'react-loader-spinner'
import Pagination from './Pagination';
import Favourites from './Favourites';
function Movies() {
     const [movies,setMovies]=useState([]);
     const [hover, setHover] = useState('')
     const [page, setPage] = useState(1);
     const [favourites, setFavourites] = useState([])
    
     function goAhead() {
       setPage(page + 1)
   }
   
     function goBack() {
       if (page > 1) {
           setPage(page - 1)
       }
   }


   let add = (movie) => {
        let newArray = [...favourites, movie]
        setFavourites([...newArray])
        console.log(newArray)
    }

     useEffect(function(){
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=bba836f86d90e020379d72137361326a&page=${page}`).then((res) => {
           console.table(res.data.results); 
           setTimeout(()=>{
            console.log("delay for 1 sec");
            setMovies(res.data.results);
           },"1000");

          })
     },[page])
  

    return <>
        <div className="pb-8 bg-[#0a192f]">
            <div className="pt-8 pb-8 font-bold text-2xl text-center text-gray-300  underline shadow-md shadow-[#040c16]">Trending Movies</div>
            {
                // ye loader hai
            movies.length==0?
            <div className='flex justify-center'>
            <Oval 
            height="100"
            width="100"
            color='grey'
            secondaryColor='grey'
            ariaLabel='loading'
          />  
          </div> :

            <div className="flex flex-wrap justify-center ">
                {
                 movies.map((movie) =>(
                    <div key={movie.id} className={`
                    bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] 
                    md:h-[30vh] md:w-[250px] 
                    h-[25vh] w-[150px]
                    bg-center bg-cover
                    rounded-xl
                    flex items-end
                    m-4 shadow-md shadow-[#040c16]
                    hover:scale-110
                    ease-out duration-300
                    relative
                    ">
                `}
                    onMouseEnter={() => {
                    setHover(movie.id)
                    }}

                    onMouseLeave={() =>
                     setHover("")}
                   > 
                   {
                    hover==movie.id && <>{
                               !favourites.find((m) => m.id ==movie.id)?
                    <div className='absolute top-2 right-2
                                    p-2
                                    bg-gray-800
                                    rounded-xl
                                    text-xl
                                    cursor-pointer
                                    '
                                                    onClick={() => add(movie)}
                                                >😍</div> : 
                                                <div className='absolute top-2 right-2
                                    p-2
                                    bg-gray-800
                                    rounded-xl
                                    text-xl
                                    cursor-pointer
                                    '
                                                    onClick={() => add(movie)}
                                                >❌</div>
                   }
                   </>
                   }
                   
                    <div className='w-full bg-gray-900 text-white py-2 font-bold text-center rounded-b-xl'>{movie.title}</div>
                </div>
                 ))
                 };
            </div>
                 }
        </div>

        <Pagination page={page} goAhead={goAhead} goBack={goBack}></Pagination>
    </>
}

export default Movies;
