import React from 'react'

function Pagination(props) {
let {totalpagesWaliMovies,Moviesperpage,cPage,setcPage}=props


let noofpages=Math.ceil(totalpagesWaliMovies.length/Moviesperpage);

let pagesArr=[];
for(let i=1;i<=noofpages;i++){
    pagesArr.push(i);
}

  return (
    <>
        {pagesArr.map(function(pagenumber){
           let css=pagenumber==cPage?" border-2 bg-blue-500 text-indigo-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline":"border-2 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
           return <button key={pagenumber} onClick={() => setcPage(pagenumber)}
           className={css}>{pagenumber}</button>
        })}
    </>

  )
}

export default Pagination