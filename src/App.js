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
      // productUrl: '/api/products'

    }
    this.deleteProduct= this.deleteProduct.bind(this)
  }

  componentDidMount(){
    const {inventoryUrl} = this.state;
    
    axios.get(inventoryUrl).then(results => {
      this.setState({products: results.data})
    }).catch(err => console.log(err))

  }

  submitProduct = (products) => {
    const {inventoryUrl} = this.state
    axios.post(inventoryUrl, products).then( results => {
        this.setState({products: results.data})
    }).catch(err => console.log(err))



}


editProduct = (product) => {
  const {inventoryUrl} = this.state;
  axios.put(`${inventoryUrl}/${product.product_id}`, product).then(results => {
    this.setState({products: results.data})
  }).catch(err => console.log(err))
}




  deleteProduct(product_id){
    const {inventoryUrl} = this.state
    axios.delete(`${inventoryUrl}/${product_id}`).then(results => {
      this.setState({products: results.data})
    }).catch(err => console.log(err))

  } //37-39





  render(){
    const {products} = this.state
    return(
      <div>

          <header><Header/></header>


          <div className= 'body'>

              <div>
                <Dashboard 
                  list = {products} 
                  editProduct = {this.editProduct} 
                  deleteProduct = {this.deleteProduct}/>

              </div>    
              <div className= 'submit-container'>
                  <Form 
                  submitProduct = {this.submitProduct}/>
              </div>
      
          </div>
      </div>
    )
  }



}
export default App




