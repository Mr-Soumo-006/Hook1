import { useEffect, useState } from "react"
//React captures the value of "seconds" only once when the useeffect runs 
function App() {
  //const [seconds,setSeconds]=useState(0)
  //const [count,setCount]=useState(0)
  // const [name,setName]=useState("")
  // //count=0
  // function handleName()
  // {
  //     setName("Soumo")
  // }
  // function handleCount()
  // {
  //   setCount(count+1)
  // }
/* useEffect(()=>{
  //effect
  console.log("Component Rendered...")
  setCount(count+1) */
  /* const interval=setInterval(()=>{
    setSeconds(seconds+1) //pass the state value to the next render
  },10000) */
//useEffect runs--->It changes a state--->re-render=>UseEffect
// cleanup code
/* return()=>{
  // code inside this
  // runs before unmount
  // Cleanup function works between re-rendering
  //dependency changed=>Cleanup function will work
  //Component Unmount
  clearInterval(interval) // Interval Stop
  console.log("TImer is Cleaned")
  // memory leak prevented
} */

//},[])//dependency array
//no dependency array=>The effect will work on every rendering
//empty dependency array=>the effect will work only when th e components loads=>first render
  return (
    <>
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4x1 font bold text-blue-600">
        Tailwind Connected(CSS Working)
      </h1>
    </div>



   
    {/* <h1>Second: {seconds}</h1> */}
     {/* <h1>Count:{count}</h1>
     <h1>Name: {name}</h1>
     <button onClick={handleCount}>Increase count</button>
    <button onClick={handleName}>My Name</button> */}

    </>
  )
}

export default App
