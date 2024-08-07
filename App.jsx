// import { useState } from 'react'
// import Counter from './Counter';
// import NameList from './Namelist';

// import  { createContext } from 'react';
// import ContextAPI from "./ContextAPI";


import { AuthProvider } from './AuthContext';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import AuthStatus from './AuthStatus';
import  './App.css'


 


// import { useState } from 'react';
// import Reducer from './Reducer'
// import Memo from './Memo';
// import callback from './callback';
// import LiftingStateUp from './LiftingStateUp';


//import propsDrilling from "./propsdrilling";

// function App()
// {
//   //use state
//   return (

//     <div>
//     {/* <Counter/>
//     <NameList/> */} 

//     </div>
//   )
// }




// function App() {

//   //use memo
//   return (
//     <div className="App">
//       <Reducer />
//     </div>
//   );
// }


// function App() {
//   //memo
//   return (
//     <div>
//       <Memo />
//     </div>
//   );
// }


// function App()
// {

//   const [add,setAdd]=useState(0);
//   return(

//     <div className="App">
//       <h2>learn use callback</h2>
//       <callback/>
//       <h2>{add}</h2>
//       <button onClick={() => setAdd(add+1)}>Addition</button>



//     </div>
//   );

// }



//lifting state up

// function App()
// {
//   function getData(data)
//   {
//      console.log(data);
//   }
//   return (
//     <div className='App'>
//      <LiftingStateUp getData={getData}/>
//      </div>
//   );
// }
 

//props drilling
// function App() {
//   const name = "Shraddha";

//   return (
//     <div>
//       <propsDrilling name={name} />
//     </div>
//   );
// }

//context API

//what is context api
//create , provide , consumer

//how to use it

// is context api also problemastic?


// const DataContext = createContext();

// function App() {
//   const name = "shraddha";

//   return (
//     <div>
//       <DataContext.Provider value={name}>
//         <ContextAPI />
//       </DataContext.Provider>
//     </div>
//   );
// }


//using state management , lifting up and contexthook
function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <AuthStatus />
        <LoginButton />
        <LogoutButton />
      </div>
    </AuthProvider>
  );
}


export default App;
//export { DataContext };

