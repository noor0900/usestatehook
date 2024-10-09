import React, {useState} from 'react'

function Usestate() {


    const [Counter,setCounter]= useState(0);

    const increament =()=>{
        setCounter (Counter + 1);

    }
    const decreament =()=>{
        setCounter (Counter - 1);

    }

  return (
    
<>


<div className="flex justify-center  items-center m-20 mt-52 space-x-6 mt-24 p-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
  <button
    onClick={decreament}
    className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-400 to-red-600 text-white text-lg font-bold rounded-full hover:from-red-500 hover:to-red-700 transition duration-300 ease-in-out shadow-lg transform hover:scale-110"
  >
    <span className="text-2xl">-</span>
  </button>
  <h1 className="text-6xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 animate-pulse">
    {Counter}
  </h1>
  <button
    onClick={increament}
    className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white text-lg font-bold rounded-full hover:from-green-500 hover:to-green-700 transition duration-300 ease-in-out shadow-lg transform hover:scale-110"
  >
    <span className="text-2xl">+</span>
  </button>
</div>







</>

  )
}

export default Usestate