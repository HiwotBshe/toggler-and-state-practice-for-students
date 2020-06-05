import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen'

class Test extends Component {
  render() {
    if (this.props.isMobile()) return <div>Mobile</div>;
    if (this.props.isTablet()) return <div>Tablet</div>;
    return <div>Desktop</div>;
  }
}

export default withGetScreen(Test);