import React from 'react';
import "./Logo.css";
// import picture from "./picture.svg"

const Logo = () => {
    return (
        <div>
            {/*<img src={picture} alt="Logo" className="w-20"/>;*/}
            <h1 className="f-headline fw2 ma0 white pa2 ma0">Ecolarity</h1>
            <h2 className="blinking-text f2 fw1 washed-green pa0 ma0">Guiding people towards a greener future.</h2>
        </div>
    )
}

export default Logo;