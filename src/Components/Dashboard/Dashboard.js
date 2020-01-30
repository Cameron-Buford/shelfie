import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            products: [],
      inventoryUrl: '/api/inventory',

        }
        this.deleteProduct=this.deleteProduct.bind(this)
    }


    componentDidMount(){
        const {inventoryUrl} = this.state;
        
        axios.get(inventoryUrl).then(results => {
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
      
        }

    render(){
        // const {deleteProduct, editProduct} = this.state

        const list = this.state.products.map((element, index) => {
            return <Product 
            key= {index} 
            products= {element}
            deleteProduct= {this.deleteProduct}
            editProduct= {this.editProduct}/>
        })
        return(
            <div>{list}</div>
        )
    }
}



        
export default Dashboard