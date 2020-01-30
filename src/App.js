import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import Product from './Components/Header/Header'
import routes from './routes';


//to do on project

//make url display image
// The 'Add to Inventory' and 'Save Changes' buttons should be conditionally rendered.
// A user should be able to click the 'Add to Inventory' button only when adding a new product.
// A user should be able to click the 'Save Changes' button only when editing an existing product.
// A user should be able to click the 'Save Changes' button.
// This should update the product in the database.
// This should clear the input boxes and display the 'Add to Inventory' button once complete
// A user should be able to click the 'Cancel' button while editing.
// This should cancel any changes made to the product.
// This should clear the input boxes and display the 'Add to Inventory' button
// A user should be able to click and 'Edit' button to edit the corresponding product.
// This should populate the form input boxes with the existing values for the product.
// This should display the 'Save Changes' button in the form.


// ROUTING The functionality:

// Your application should still perform all of the functionality previously added.
// The Dashboard should have its own route.
// The Form should be used in two routes.
// There should be a route for adding a product.
// There should be a route for editing an existing product.
// A user should be able to navigate between the Dashboard and the Add Form using navigation links in the Header.
// A user should be able to navigate to the Edit Form using the 'Edit' buttons.
// A user should be navigated to the Dashboard upon successfully adding a new product.
// A user should be navigated to the Dashboard upon successfully saving changes to an existing product.
// A user should be navigated to the Dashboard upon canceling changes to an existing product.



class App extends Component{
  constructor(){
    super()
    this.state = {
      products: [],
      inventoryUrl: '/api/inventory',
      // productUrl: '/api/products'

    }
    // this.deleteProduct= this.deleteProduct.bind(this)
  }

  componentDidMount(){
    const {inventoryUrl} = this.state;
    
    axios.get(inventoryUrl).then(results => {
      this.setState({products: results.data})
    }).catch(err => console.log(err))

  }

//   submitProduct = (products) => {
//     const {inventoryUrl} = this.state
//     axios.post(inventoryUrl, products).then( results => {
//         this.setState({products: results.data})
//     }).catch(err => console.log(err))



// }


// editProduct = (product) => {
//   const {inventoryUrl} = this.state;
//   axios.put(`${inventoryUrl}/${product.product_id}`, product).then(results => {
//     this.setState({products: results.data})
//   }).catch(err => console.log(err))
// }




  // deleteProduct(product_id){
  //   const {inventoryUrl} = this.state
  //   axios.delete(`${inventoryUrl}/${product_id}`).then(results => {
  //     this.setState({products: results.data})
  //   }).catch(err => console.log(err))

  // } //37-39





  render(){
    const {products} = this.state
    return(
      <div>

          <header><Header/></header>


          <div className= 'body'>
            {routes}

              {/* <div>
                <Dashboard 
                  list = {products} 
                  editProduct = {this.editProduct} 
                  deleteProduct = {this.deleteProduct}/>

              </div>    
              <div className= 'submit-container'>
                  <Form 
                  submitProduct = {this.submitProduct}/>
              </div> */}
      
          </div>
      </div>
    )
  }



}
export default App




