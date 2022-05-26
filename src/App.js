// import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';
import React from 'react';


//   let A=()=> <div> Component : A</div>
//   let B=()=> <div>  Component : B</div>

// function App() {
//  const[showComponent, setShowComponent]= useState()
// // when i click on comp A - B component will mount on root level, and useeffect will rum and it will print 3.
//  useEffect(()=>{
//     console.log("3");
//   })
//   return (
//     <div className="App"    onClick={()=>setShowComponent(!showComponent)}>  Hello
//      {showComponent? <A/> :<B/>}
//   </div>
//   );
// }
// export default App;


//************************************************** */



// function App() {
// const[count1, setcount1]= useState(0);
// const[count2, setcount2]= useState(0);

// //useEffect will run always when any componnet mounted
// // useEffect(()=>{
// //   console.log("inside useEffect", count1, count2);
// // })


// // we pass 2nd argument empty array,useEffect will run only once at starting

// useEffect(()=>{
//   console.log("inside useEffect", count1, count2);
// },[])

// return (
//   <div>
//   <div className="App"    onClick={()=>setcount1(count1+1)}> Counter 1:{count1}</div>
//   <div className="App"    onClick={()=>setcount2(count2-1)}> Counter 2 :{count2}</div>
// </div>
// );
// }
// export default App;




function App() {
 
// fetch("https://022q7o.csb.app/todos") -- from codesendbox not working

fetch("http://localhost:8080/todos")
   .then((r)=> r.json())
   .then((d)=>{
    console.log(d);
  });
  return (
    <div className="App">
      app
    </div>
  );
  }
  export default App;
