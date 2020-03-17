import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { getProducts } from '../store/actions/ticketViewerActions'

class TicketDetails extends Component {
  componentWillMount () {
    // Check if the props is sent, if so call the appropriate action
    this.props.getProducts()
  };

  displayTicketDetails () {
    return (
      <div>
        LOL
      </div>
    )
  };

  render () {
    const details = this.displayTicketDetails()
    return (
      <div data-test='ticket-details-component'>
        <h1>Ticket Details</h1>
        {details}
        <a href='/'>
          <Button color='primary'>Back</Button>
        </a>
      </div>
    )
  };
};

TicketDetails.propTypes = {
  getProducts: PropTypes.func.isRequired,
  ticketViewer: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  ticketViewer: state.ticketViewer
})

export default connect(mapStateToProps, { getProducts })(TicketDetails)
