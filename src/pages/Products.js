import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
import { getProducts } from '../store/actions/productViewerActions'

class Products extends Component {
  componentDidMount () {
    this.props.getProducts()
  };

  displayProductDetails () {
    const allProducts = this.props.productViewer.products
    const entriesArray = Object.entries(allProducts)
    const productList = entriesArray.map((product, key) =>
      <li key={key} data-test='product-item'>
        <h4>
          {product[1].Title}
        </h4>
        <div>
          Category: {product[1].Category}
        </div>
        <div>
          Weight: {product[1].Weight} grams
        </div>
        <div>
          Cubic Weight: {product[1].CubicWeight} KG
        </div>
      </li>
    )

    return (
      <ul data-test='product-list'>
        {productList}
      </ul>
    )
  };

  handlePageOnClick = _ => {
    this.props.getProducts(this.props.productViewer.nextUrl)
  }

  nextOrPrev () {
    return this.props.productViewer.nextUrl ? 'Next Page' : 'First Page'
  }

  displayErrorMsg () {
    if (this.props.productViewer.error) {
      return (
        <div data-test='error-div'>
          {this.props.productViewer.error}
        </div>
      )
    }
  }

  render () {
    const productDetails = this.displayProductDetails()
    const errorMessage = this.displayErrorMsg()
    return (
      <div data-test='product-display-component'>
        <h1>Products</h1>
        {productDetails}
        {errorMessage}
        <Button
          color='primary'
          onClick={this.handlePageOnClick}
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
