import React, { Component } from 'react';

import { actions as layoutActions } from '../../redux/modules/layout';
import { connect } from 'react-redux';
import { P1, P2, P3 } from './styles';


class AppButtons extends Component {
  render() {
    return (
      <div>
          <P1 onClick={() => this.props.layoutContent}>
            01
          </P1>
          <P2 onClick={() => this.props.layoutContent}>
            02
          </P2>
          <P3 onClick={() => this.props.layoutContent}>
            03
          </P3>
      </div>
    );
  }
}

// const mapStateToProps = () => ({

// })

const mapDispatchToProps = {
  layoutContent: layoutActions.layoutActions
}

export default connect(null, mapDispatchToProps)(AppButtons)
// export default AppButtons;