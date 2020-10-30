import React, { Component } from 'react';
import './Nav.css';

export default class componentName extends Component {

 state = {
     hidden: true
 }

  clickHandler = (e) => {
      e.preventDefault();
        this.setState({hidden: !this.state.hidden})
  }
  render() {
    let hiddenClass = this.state.hidden ? "hidden" : "expose" ;
    let spanClass = this.state.hidden ? "" : "change" ;
    return (
        <div>
        <nav>
            <div className="menu" onClick={this.clickHandler}>
              <span className={spanClass}></span>
              <span className={spanClass}></span>
              <span className={spanClass}></span>
          </div>
        </nav>
        <div className={hiddenClass}>
          <div>hidden</div>
        </div>
    </div>
    );
  }
}
