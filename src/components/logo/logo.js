import "./logo.css";
import logoPNG from "./Снимок экрана(2).png";
import {Component} from 'react';

class Logo extends Component {
    render(){
        return(
            <img src={logoPNG}/> 
        )
    }
}

export default Logo;