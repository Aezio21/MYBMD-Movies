import React from 'react'
import { useEffect } from 'react';
function MoviesTable(props) {

 let {Content,isLoaded,setContent,filteredContent}=props
    


   //*********** ye Delete button ko handle karene ka liya********//
    
   function handleDelete(idOfMovieToBeDeleted){
       let restofmovies=Content.filter((movie) => movie._id!=idOfMovieToBeDeleted);
       setContent(restofmovies);

  }

  
  return (
     <div>
      <div>{isLoaded==true?<span>isLoading...</span>:<div>{
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 min-w-full">
                      <tr>
                      <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          S.No
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          <div className='flex'>
                            <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png' className='mr-2 cursor-pointer'
                              // onClick={() => {
                              //   setPopularity(0)
                              //   setRating(-1)
                              // }}
                            />
                            Rating
                            <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png'
                              // onClick={() => {
                              //   setPopularity(0)
                              //   setRating(1)
                              // }}
                              className='ml-2 mr-2' />
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          <div className='flex'>
                            <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png'
                              // onClick={() => {
                              //   setRating(0)
                              //   setPopularity(-1)
                              // }}
                              className='mr-2' />
                            Popularity
                            <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png' className='ml-2 mr-2'
                              // onClick={() => {
                              //   setRating(0)
                              //   setPopularity(1)
                              // }}
                            />
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Genre
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Remove
                        </th>
                      </tr>
                    </thead>
             <tbody>
               {filteredContent.map(function(movie,idx){
               return<tr key={movie._id}>
               <td className='px-2 border text-gray-500'>{idx+1}</td>
               <td className='px-2 border text-gray-500'>{movie.title}</td>
               <td className='px-2 border text-gray-500'>{movie.dailyRentalRate}</td>
               <td className='px-2 border text-gray-500'>{movie.numberInStock}</td>
               <td className='px-2 border text-gray-500'>{movie.genre.name}</td>
               <td className='px-2 text-gray-500'><button onClick={() => handleDelete(movie._id)} 
               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
               </tr>
               })}
             </tbody>
            </table>
        }</div>}</div>
    </div>

  )
}

export default MoviesTable