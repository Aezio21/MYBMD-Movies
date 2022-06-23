import React from 'react'

function InputBox(props) {
   let[searchText,setsearchText]=React.useState("");
   let[numberOfitems,setnumberOfitems]=React.useState(4);
   
   function handleText(e){
     setsearchText(e.target.value);

     props.setGlobalSearchText(e.target.value);
   }



   function handleCount(e){
      setnumberOfitems(e.target.value);

      props.setGlobalnumberofitems(e.target.value);
   }

  return (
    <div>
      <input className="shadow appearance-none border font-bold rounded py-2 px-3 mx-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       type="text" placeholder="search your movie" value={searchText} onChange={(e) => handleText(e)}></input>
     Movies per page:<input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="number" min="2" max="9" value={numberOfitems} onChange={(e) => handleCount(e)}></input>
    </div>
    
  )
}

export default InputBox