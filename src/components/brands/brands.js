import "./brands.css";
const Brands  =()=> {
          const data=[
            {name:'Jordan'},
            {name:'Converse'},
            {name:'Vans'}
          ]
         const a=data.map(({name})=>{
        // const active=props.filter===name;
        // const classCss=active? 'btn btn-light': "btn btn-light-light";
        return(
            <a type="button"
            key={name}>
            {/* // onClick={()=>props.onFilterSelect(name)}
            //     {label} */}
            {name}
            </a>
            )
        })
        return(
          <div className="brand">
        <div className="button">
            {a}
        </div> 
        </div>
        )
    
}

export default Brands;