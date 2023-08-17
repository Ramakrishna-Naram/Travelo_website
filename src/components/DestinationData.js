import { Component } from 'react';
import City from  '../images/paris.jpg'
import City2 from  '../images/paris2.jpg'
import City3 from  '../images/rome.jpg'
import City4 from  '../images/rome2.jpg'
import "./Destination.css";

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className='des-text'>
                 <h2>{this.props.heading}</h2>
                 <p>
                 {this.props.text}
                 </p>

            </div>
            <div className='image'>
             <img alt='img' src={this.props.img1} />
             <img alt='img' src={this.props.img2} />
            </div>
        </div>
        );
    }
};

export default DestinationData;

