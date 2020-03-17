import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { getTickets } from '../store/actions/ticketViewerActions';


class TicketList extends Component {

  componentDidMount() {
    // Calls the action responsible for fetching the tickets
    // and setting them as props
    this.props.getTickets();
  }

  pageOnClick = e => {
    // Loads the specific page based on the user's choice
    this.props.getTickets(e.target.value);
  }

  // Checks if the tickets array has a length of more than 0, 
  // if so then map them to a list
  displayTickets() {
    if (this.props.ticketViewer.tickets.length > 0 ) {
      const my_tickets = this.props.ticketViewer.tickets.map((ticket, key) =>
        <li key={key} data-test="ticket-list-item" >
          <div>
            <p>ID = {ticket.id}</p>
            <p>NAME = {ticket.subject}</p>
          </div>
        </li>
      );
      return (
      <div>
        <h4>{this.props.ticketViewer.count} tickets in total</h4>
        {my_tickets}
      </div>)
    }
  }

  // If the data is fetched then i create the pagination links
  displayPageNumbers() {
    let pagination_list = [];
    if (this.props.ticketViewer.count) {
      for (var page_no = 1; page_no <= this.props.ticketViewer.number_of_pages; page_no++) {
        pagination_list.push(
          <PaginationItem key={page_no} >
            <PaginationLink 
              onClick={this.pageOnClick}
              value={page_no}>
              {page_no}
            </PaginationLink>
          </PaginationItem>
        )
      }
      return pagination_list
    }
  }

  // If there is an error msg set then we display it
  displayErrorMsg() {
    if ( this.props.ticketViewer.error ) {
      return (
        <div>{this.props.ticketViewer.error }</div>
      )
    }
  }

  render() {
    const my_ticket_list = this.displayTickets()
    const my_pages = this.displayPageNumbers()
    const error_msg = this.displayErrorMsg()
    return (
      <div data-test="ticket-list" >
        <h1>Ticket List Viewer</h1>
        <h3>{error_msg}</h3>
        <ul>{my_ticket_list}</ul>
        <Pagination>
          {my_pages}
        </Pagination>
      </div>
    );
  }
}

TicketList.propTypes = {
  getTickets: PropTypes.func.isRequired,
  ticketViewer: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  ticketViewer: state.ticketViewer
});

export default connect(mapStateToProps, { getTickets })(TicketList);