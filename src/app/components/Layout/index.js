import React, { Component } from 'react';
import Header from '@components/Header';
import './style.scss';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSidebar: true
    };
  }

  render() {
    const { showSidebar } = this.state;

    return (
      <React.Fragment>
        <Header />
        <div className="row no-gutters" id="content">
          <div className="col d-flex">
            {this.props.children}
          </div>
          <div className={`col-2 ${!showSidebar && 'd-none' }`}>
            sidebar
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
