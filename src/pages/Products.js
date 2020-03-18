import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
import { getProducts } from '../store/actions/productViewerActions'

class Products extends Component {
  componentWillMount () {
    this.props.getProducts()
  };

  displayProductDetails () {
    const all_products = this.props.productViewer.products
    const entries_array = Object.entries(all_products)
    const product_list = entries_array.map((product_entry, key) =>
      <li key={key} data-test="product-list-item" >
        {product_entry[1].title}
        <div>
          {product_entry[1].category}
        </div>
        <div>
          {product_entry[1].weight} grams
        </div>
      </li>
    );
    return (
      <ul>
        {product_list}
      </ul>
    )
  };

  pageOnClick = e => {
    this.props.getProducts(this.props.productViewer.nextUrl)
  }

  nextOrPrev () {
    return this.props.productViewer.nextUrl ? 'Next Page' : 'First Page'
  }

  render () {
    const productDetails = this.displayProductDetails()
    return (
      <div data-test='product-details-component'>
        <h1>Products</h1>
        {productDetails}
        <Button
          color='primary'
          onClick={this.pageOnClick}
        >
          {this.nextOrPrev()}
        </Button>
      </div>
    )
  };
};

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  productViewer: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  productViewer: state.productViewer
})

export default connect(mapStateToProps, { getProducts })(Products)
