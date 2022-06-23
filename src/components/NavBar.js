// rfce
import React from 'react';
import Logo from "../logo.png";
import {Link} from 'react-router-dom'

function NavBar() {
    return <>
        <div className=" 
        pl-12 py-4 space-x-8
         flex  items-center  bg-[#0a192f] shadow-md shadow-[#040c16] mb-1 
        ">
            <img className="w-[50px] md:w-[60px]" src={Logo}></img>
            <Link to="/" className=
            {`text-blue-400 
            font-bold 
            text-xl
            md:text-3xl`}>Movies</Link>
            <Link to="favourites" className="text-blue-400 font-bold text-xl md:text-3xl">Home</Link>
        </div>
    </>;
}

export default NavBar;
