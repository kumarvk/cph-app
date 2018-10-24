import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { dismissNotification } from '../actions/action';

class NotifyContainer extends Component {

  onDismiss = async (e) => {
    await this.props.dismissNotification();
  }

  render() {
    const {color, visible, message} = this.props.notification
    return(
      <div>
        <Alert color={color} isOpen={visible} toggle={this.onDismiss}>
          {message}
        </Alert>
      </div>
    )
  }
}

const mapDispatchToProps = {
  dismissNotification
};

const mapStateToProps = (state) => {
  return {
    notification: state.flightDetails.notification
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotifyContainer);