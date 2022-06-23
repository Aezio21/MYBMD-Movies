import React from 'react'
import Genre from './Genre'
import Movies from './Movies'


function Main() {
  const[cGenre,setGenre]=React.useState("");
  const [cPage, setcPage] = React.useState(1);
  
  const setGlobalGenre = (nGenre) => {
    // console.log("main: " + nGenre);
    if (nGenre == "All Genre") {
        setGenre("");
    } else {
        setGenre(nGenre);
    }
    setcPage(1);
}

  return (
    <div className='flex'>
      <div className='w-1/4'>
        <Genre setGlobalGenre={setGlobalGenre}></Genre>
      </div>
      <div className='w-full'>
        <Movies cGenre={cGenre}  cPage={cPage}
                setcPage={setcPage}/>
      </div>
    </div>
  )
}

export default Main
