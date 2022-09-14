import "./brands.css";
import React from "react";
import ReactDOM from "react-dom";
import { useNavigate, Link, BrowserRouter as Router } from "react-router-dom";

// function Child() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <Link to="/path/to">Редирект на другую странциу</Link>
//       <button
//         onClick={() => {
//           navigate("/path/to");
//         }}
//         type="button" >
//         Перейти на другую страницу
//       </button>
//     </div>
//   );
// }
// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <Child />
//       </Router>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("container"));

const Brands  =()=> {
          const data=[
            {name:'Jordan', Link:'/path/to/jordan.js'},
            {name:'Converse', Link:'/path/to/converse.js'},
            {name:'Vans', Link:'/path/to/vans.js'}
          ]
          const navigate = useNavigate();
          const buttons=data.map(({name})=>{
          return(
            <div>
              <Link to="/path/to"> heze </Link>
              <button
                onClick={() => {
                  navigate({Link});
                }}
                key={name}
                type="button" >
                 {name}
              </button>
            </div>
          )})
        //  const buttons=data.map(({name})=>{
        // //  const active=props.filter===name;
        // //  const classCss=active? 'btn btn-light': "btn btn-light-light";
        // return(
        //     <button type="button"
        //     key={name}>
        //     {/* onClick={()=>props.getElementById(name)}
        //          {label} */}
        //     {name}
        //     </button>
        //     )
        // })
        return(
          <div className="brand">
        <div className="button">
            {buttons}
        </div> 
        </div>
        )
}
// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <Brands />
//       </Router>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("container"));

export default Brands;

// import "./brands.css";

// const Brands  =()=> {
//           const data=[
//             {name:'Jordan'},
//             {name:'Converse'},
//             {name:'Vans'}
//           ]
//          const buttons=data.map(({name})=>{
//         // const active=props.filter===name;
//         // const classCss=active? 'btn btn-light': "btn btn-light-light";
//         return(
//             <button type="button"
//             key={name}>
//             {/* // onClick={()=>props.onFilterSelect(name)}
//             //     {label} */}
//             {name}
//             </button>
//             )
//         })
//         return(
//           <div className="brand">
//         <div className="button">
//             {buttons}
//         </div> 
//         </div>
//         )
    
// }

// export default Brands;