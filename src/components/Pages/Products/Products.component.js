import React from 'react';
import './Products.css';
import { Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

class Products extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: props.products,
      sortType: '',
    };
  }
  componentDidMount(){
    this.props.fetchProducts();
  }
  static getDerivedStateFromProps(props, state){
    if (JSON.stringify(props.products) !== JSON.stringify(state.products)){
      return {
        products: props.products,
      };
    }
    return null;
  }
    changeSortType = (type) => {
      let { products, sortType } = this.state;
      if (type === 'name') {
        if (sortType !== 'name-up') {
          sortType = 'name-up';
          products = products.sort((a, b) => a.name.localeCompare(b.name));
        } else {
          sortType = 'name-down';
          products = products.sort((a, b) => b.name.localeCompare(a.name));
        }
      }
      else if (type === 'price') {
        if (sortType !== 'price-up'){
          sortType = 'price-up';
          products = products.sort((a, b) => 
            (parseFloat(a[type]) > parseFloat(b[type]))
              ? 1 
              : ((parseFloat(b[type]) > parseFloat(a[type])) ? -1 : 0));
        } else {
          sortType = 'price-down';
          products = products.sort((a, b) => 
            (parseFloat(a[type]) > parseFloat(b[type])) 
              ? -1 
              : ((parseFloat(b[type]) > parseFloat(a[type])) ? 1 : 0));
        }
      }
  
      this.setState({
        sortType,
        products,
      });
    }
    render(){
      const { products, sortType } = this.state;
      const { loading } = this.props;
      return (
        <div className="products-component">
          Sort By: 
          <Button 
            type="primary"
            onClick={() => this.changeSortType('name')}
          >
            Name - {sortType !== 'name-up' ? 'A-Z' : 'Z-A'}
          </Button>
          
          <Button 
            type="primary" 
            icon={sortType !== 'price-up' ? 'arrow-up' : 'arrow-down'}
            onClick={() => this.changeSortType('price')}
          >
            Price
          </Button>
          <div className="products-wrapper">
            { loading && <LoadingOutlined style={{ fontSize: 20, margin: '0 auto' }} type="loading" /> }
            { !loading && products.length === 0 && <div>No Products Available</div> }
            {
              products.map((product, index)=> (
                <div key={index} className="product-container">
                  <img src="https://place-hold.it/300x300/666/fff.png/000?text=Product%20Image" alt="product" />
                  <div>{product.name}</div>
                  <div className="product-price">$ {product.price}</div>
                </div>
              ))
            }
          </div>
        </div>
      );
    }
}

export default Products;
  