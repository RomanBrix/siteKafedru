import React, {Component} from 'react';
export default class Map extends Component {

    render(){
        return(
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.226596846557!2d30.471851715731567!3d50.45550497947607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce80bb14c36b%3A0x5c4eb5067e6b48c6!2z0LLRg9C70LjRhtGPINCS0LDQvdC00Lgg0JLQsNGB0LjQu9C10LLRgdGM0LrQvtGXLCAyNCwg0JrQuNGX0LI!5e0!3m2!1suk!2sua!4v1495725083294&zoom=18"
                frameBorder={0}
                style={{border:0, width: '100%', height: '450px'}}
                allowFullScreen
            />
        )
    }
}
