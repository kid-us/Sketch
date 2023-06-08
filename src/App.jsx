import React, { Component } from 'react';
import Navbar from './component/Navbar';
import LeftSideBar from './component/LeftSideBar';

class App extends Component {
  state = {}


  render() {
    return (
      <>
        <div className='container-fluid'>
          <Navbar />

          <div className='my-name fw-semibold d-none d-md-block' title='Kidus'>
            <a href="https://kidus-w.web.app" className='small'>
              <ul>
                <li className='py-3 code'> {'</>'} </li>
                <br />
                <li>K</li>
                <li>i</li>
                <li>d</li>
                <li>u</li>
                <li>s</li>
              </ul>

            </a>
          </div>

          <div className="row">
            <LeftSideBar />
          </div>
        </div>
        <div className="bg-img">
        </div>

<footer className='text-center fw-semibold small mt-3 d-block d-md-none'>
          <p>Developed by:
            <a href="https://kidus-w.web.app"> Kidus</a>
          </p>
        </footer>
      </>
    );
  }
}

export default App;
