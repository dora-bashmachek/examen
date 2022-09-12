import "./photo.css";
import jordanPNG from "./jordan.2.webp";
import vansPNG from "./vanse.6.webp";
import conversePNG from "./converse.1.jpg";
import {Component} from 'react';

class Photo extends Component {
    render(){
        return(
            <div className="photo">
            <div>
            <img src={jordanPNG}/> 
            </div>
            <div>
            <img src={conversePNG}/> 
            </div>
            <div>
            <img src={vansPNG}/> 
            </div>
            </div>
        )
    }
}

export default Photo;