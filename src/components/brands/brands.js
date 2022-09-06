import "./brands.css";
import {Component} from 'react';

class Brands extends Component {
    constructor(props){
        super(props);
        this.state={
          data:[
            {name:'Nike'},
            {name:'Vans'},
            {name:'Jordan'}
          ],
    const buttons=data.map(({name})=>{
        // const active=props.filter===name;
        // const classCss=active? 'btn btn-light': "btn btn-light-light";
        return(
            <button type="button">
            {/* // onClick={()=>props.onFilterSelect(name)}
            // key={name}
            //     {label} */}
            </button>
            )
        })
  }}
 
    render(){
        const {buttons,name}=this.state;
        return(
        <div className="brand">
            {buttons}
        </div> 
        )
    }
}

export default Brands;