import React from 'react';
import Particles from 'react-particles-js';
import Logo from './components/Logo/Logo';
import Signup from './components/Signup/Signup';
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import './App.css';
// import leaf from './leaf.png';


import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab); 

const particleOptions = {
  "particles": {
    "number": {
        "value": 10,
        "density": {
            "enable": false
        }
    },
    "shape": {
      "type": "images",
      "images": [
          {
              "src": "/images/leaf.png",
              "height": 20,
              "width": 20
          },
          {
              "src": "/images/leaf2.png",
              "height": 20,
              "width": 20
          },
          {
              "src": "/images/leaf3.png",
              "height": 20,
              "width": 20
          }
      ]
  },
    "size": {
        "value": 10,
        "random": true
    },
    "move": {
        "direction": "bottom",
        "out_mode": "out"
    },
    "line_linked": {
        "enable": false
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className="particles"
        params={particleOptions} 
      />
      <Background />
      <Logo />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
