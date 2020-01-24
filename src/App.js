import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import Product from './Components/Header/Header'


class App extends Component{
  constructor(){
    super()
    this.state = {
      products: [],
      inventoryUrl: '/api/inventory',
      productUrl: '/api/products'

    }
  }

  componentDidMount(){
    const {productUrl} = this.state;
    // const {productUrl} = this.state;
    axios.get(productUrl).then(results => {
      this.setState({products: results.data})
    }).catch(err => console.log(err))

  }


  deleteProduct(){

  } //37-39





  render(){
    const {products} = this.state
    return(
      <div><Dashboard list = {products}/>
      <Form/>
      
       </div>
    )
  }



}
export default App




