import React, { Component } from 'react'
import Products from './Products'
import Filter from "./Filter";
import data from "../data.json";
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  sortProducts = (e) => {
    const sort = e.target.value
      this.setState((state) => ({
        sort: sort ,
        products: this.state.products
          .slice()
          .sort((a, b) => 
          sort === "lowest" ? ((a.price < b.price) ? 1 : -1) :
            sort === "highest" ? a.price > b.price ? 1 : -1:
              a._id > b._id ? 1: -1
        
        ),
      }));
  };
  filterProducts = (e) => {
    if (e.target.value == "") {
      this.setState({size: e.target.value, products: data.products});
    } else {
      this.setState({
        size: e.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(e.target.value) >= 0
        ),
      });
    } 
  }
  render() {
    return (
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}
            />
            <Products products={this.state.products} />
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
    );
  }
}
