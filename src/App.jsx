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
      </>
    );
  }
}

export default App;