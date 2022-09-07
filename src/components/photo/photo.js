import "./photo.css";
import jordanPNG from "./jordan.1.webp";
import vansPNG from "./vanse.2.webp";
import conversePNG from "./converse.1.jpg";
import {Component} from 'react';

class Photo extends Component {
    render(){
        return(
            <div className="photo">
            <a>
            <img src={jordanPNG}/> 
            </a>
            <a>
            <img src={vansPNG}/> 
            </a>
            <a>
            <img src={conversePNG}/> 
            </a>
            </div>
        )
    }
}

export default Photo;